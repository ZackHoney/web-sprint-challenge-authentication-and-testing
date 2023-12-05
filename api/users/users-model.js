const db = require('../../data/dbConfig')

function find() {
    return db('users')
        .select(
            'username',
            'password'
        )
}

function findBy(username) {
    return db('users')
        .where('username', username)
        .first()
}

function findById(id) {
    return db('users')
        .select(
            'id',
            'username',
            'password'
        )
        .where('id', id)
        .first()
}

async function add(user) {
    const [id] = await db('users').insert(user)
    return findById(id)
}

module.exports = {
    find,
    findBy,
    findById,
    add
}