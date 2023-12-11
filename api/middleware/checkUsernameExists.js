const checkUsernameExists = (req, res, next) => {
    const { username, password } = req.body;
    if (username && password) {
      next();
    } else {
      res.status(400).json({ message: "Username and password are required." });
    }
  };
  

module.exports = checkUsernameExists