const Jokes = require('../jokes/jokes-data')

module.exports = async (req, res, next) => {
    try {
        const jokes = await Jokes.findBy({ username: req.body.username })
        if (!jokes.length) {
            next()
        }
        else {
            next({ message: 'username taken', status: 422})
        }
    } catch (err) {
        next(err)
    }
}

