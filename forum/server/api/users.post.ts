import db from '~/server/sql'

export default async function (req, res) {
  if (req.method === 'POST') {
    const { login, password } = req.body

    try {
      const [rows]: { [key: string]: any }[] = await db.execute(
        'SELECT * FROM users WHERE login = ?',
        [login]
      )

      if (rows.length === 0) {
        throw new Error('Invalid credentials')
      }

      const user = rows[0]

      if (password !== user.password) {
        throw new Error('Invalid credentials')
      }

      // Hash the password before sending it to the client
      delete user.password

      res.status(201).json({ user })
    } catch (error) {
      console.error('Error:', error)
      res.status(401).json({ error: 'Invalid credentials' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}