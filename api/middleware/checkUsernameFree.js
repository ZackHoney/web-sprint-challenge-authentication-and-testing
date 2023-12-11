const User = require('../users/users-model')
// const db = require('../../data/dbConfig')

async function checkUsernameFree(req, res, next) {
    try {
        const { username } = req.body
        const { user } = await User.findBy(username)
        if(!user.length) {
            next()
        }
        else {
            next({ message: 'username taken', status: 422 })
        }
    } catch (err) {
        next(err)
    }
}

module.exports = checkUsernameFree