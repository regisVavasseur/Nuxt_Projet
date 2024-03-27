import mysql from 'mysql2/promise'
import bluebird from 'bluebird'

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'forum',
    Promise: bluebird,
})

export default connection;