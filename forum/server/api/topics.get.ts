import db from '~/server/sql'
export default defineEventHandler(async (event: any) => {

    const [rows, fields] = await db.execute(
        "SELECT * FROM `topics`")
    return {
        topics: rows
    }
});