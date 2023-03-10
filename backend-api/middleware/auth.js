const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  // const token =req.headers.authorization.split(' ')[1];

  // Check for token
  if (!token)
    return res.status(401).json({ msg: "No token, authorizaton denied" });

  try {
    // Verify token
    // console.log("@@", token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;