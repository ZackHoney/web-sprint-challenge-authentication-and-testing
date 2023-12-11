const User = require('../users/users-model')

async function checkUsernameFree(req, res, next) {
    try {
        const user = await User.findBy({username: req.body.username})
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