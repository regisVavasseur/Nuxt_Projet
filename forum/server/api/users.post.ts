import db from '~/server/sql'

export default async function (event: any) {

  try {
    const [rows, fields] = await db.execute(
      'INSERT INTO users (login, password) VALUES (?, ?)',
      [event.login, event.password]
    )

    return {
      users: rows,
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      error: 'An error occurred while inserting the beer.',
    }
  } finally {
    db.end()
  }
}