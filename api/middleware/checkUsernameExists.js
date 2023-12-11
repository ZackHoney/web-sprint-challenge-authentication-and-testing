const User = require('../users/users-model')

const checkUsernameExists =  (req, res, next) => {
    try {
        const [user] =  User.findBy({ username: req.body.username })
        if (!user) {
            next({ status: 401, message: 'invalid credentials' })
        } else {
            req.user = user
            next()
        }
    } catch (err) {
        next(err)
    }
}


module.exports = checkUsernameExists