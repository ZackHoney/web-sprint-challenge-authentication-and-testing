const { JWT_SECRET } = require('../secrets/index');
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  // const token = req.headers.authorization
  // if (req.session.user) {
  //   next()
  // } else if(!req.session.user.token) {
  //   next({ status: 401, message: 'token required'})
  // } 
  // else {
  //   next({ status: 401, message: 'token invalid'})
  // }
  const token = req.headers.authorization
    if (!req.user.token) {
       return next({ status: 401, message: 'token required'})
    }
    jwt.verify(token, JWT_SECRET, (err, decodedToken ) => {
      if (err) {
        next({ status: 401, message: 'token invalid'})
      } else {
        req.decodedToken = decodedToken
        next()
      }
    })
  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
};
