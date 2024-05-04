import db from '~/server/sql'
export default defineEventHandler(async (event: any) => {
    const forumId = event.context.params.id;
    const [topics] = await db.execute(
        "SELECT * FROM `topics` WHERE `forum_id` = ?", [forumId]
    )
    const [forum] = await db.execute(
        "SELECT * FROM `forums` WHERE `id` = ?", [forumId]
    )
    return {
        topics: topics,
        forum: forum
    }
});