import db from '~/server/sql'

export default defineEventHandler(async (event: any) => {
    const { name, description } = event.context.body;
    if (!name || !description) {
        return {
            status: 400,
            body: 'Name and description are required'
        }
    }
    await db.execute(
        "INSERT INTO `forums` (`name`, `description`) VALUES (?, ?)", [name, description]
    )
    return {
        status: 200,
        body: 'Forum created successfully'
    }
});