import db from '~/server/sql'

export default defineEventHandler(async (event: any) => {
    const userId = event.context.params.id;
    const [users] = await db.execute(
        "SELECT login, role FROM `users` WHERE `id` = ?", [userId]
    )
    return {
        user: users
    }
});