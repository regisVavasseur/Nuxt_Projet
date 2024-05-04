import db from '~/server/sql'

export default defineEventHandler(async (event: any) => {
    console.log(event.context.body);
    const { title, content, topic_id, user_id } = event.context.body;
    if (!title || !content || !topic_id || !user_id) {
        return {
            status: 400,
            body: 'Content, topic_id and user_id are required'
        }
    }
    await db.execute(
        "INSERT INTO `topics` (`title`, `content`, `forum_id`, `user_id`) VALUES (?, ?, ?)", ["title", "content", "1", "1"]
    )
    return {
        status: 200,
        body: 'Topic created successfully'
    }
});