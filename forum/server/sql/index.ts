import mysql from 'mysql2/promise'
import bluebird from 'bluebird'

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'forum_user',
    password: 'forum_password',
    database: 'forum_db',
    Promise: bluebird,
})

export default connection;