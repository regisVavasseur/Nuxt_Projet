import db from '~/server/sql'

export default defineEventHandler(async (event: any) => {
    const topicId = event.context.params.id;
    const [posts] = await db.execute(
        "SELECT * FROM `posts` WHERE `topic_id` = ?", [topicId]
    )
    return {
        posts: posts
    }
});