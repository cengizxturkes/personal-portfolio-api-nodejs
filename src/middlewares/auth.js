const jwt = require("jsonwebtoken");
const { use } = require("../routers/auth.routes");
const createToken = async (user, res) => {
  console.log("user", user);
  const payload = {
    sub: user._id,
    name: user.name,
  };
  const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    algorithm: "HS512",
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return res.status(201).json({
    succes: true,
    token,
    message: "Başarılı.",
  });
};
module.exports = {
  createToken,
};
