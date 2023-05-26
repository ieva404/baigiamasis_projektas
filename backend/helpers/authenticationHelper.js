const jwt = require("jsonwebtoken");

const talkenFunction = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token);
    const user = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(user);
    res.locals.user = user;
    //   console.log(user);
    next();
  } catch (e) {
    res.json({ message: "ivalid token" });
  }
};

module.exports = { talkenFunction };