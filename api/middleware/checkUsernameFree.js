// const User = require('../users/users-model')
const db = require('../../data/dbConfig')

async function checkUsernameFree(req, res, next)  {
    try {
      const { username } = req.body;
      const [existingUser] = await db("users").where("username", username);
                               
      if (!existingUser) {
        next(); // Username is not taken
      } else {
        res.status(400).json({ message: "Username is already taken." });
      }
    } catch (err) {
      next(err);
    }
  };

module.exports = checkUsernameFree