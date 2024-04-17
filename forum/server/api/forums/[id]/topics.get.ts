import db from '~/server/sql'
export default defineEventHandler(async (event: any) => {
    const forumId = event.context.params.id;
    const [forum] = await db.execute(
        "SELECT * FROM `forums` WHERE `id` = ?", [forumId]
    )
    const [topics] = await db.execute(
        "SELECT * FROM `topics` WHERE `forum_id` = ?", [forumId]
    )
    return {
        forum: forum,
        topics: topics
    }
});