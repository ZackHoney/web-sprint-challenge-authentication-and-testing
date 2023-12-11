const User = require('../users/users-model')

async function checkUsernameFree(req, res, next) {
    try {
        const users = await User.findBy({username: req.body.username})
        if(!users.length) {
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