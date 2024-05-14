const jwt = require("jsonwebtoken");

const tokenGenerator = (res, id) => {
  const token = jwt.sign({ id }, "jfam43dcyp434k5l3k5k3j043ek0afsf", {
    expiresIn: "90d",
  });

  const MAX_AGE = 30 * 24 * 60 * 60 * 1000;
  res.cookie("_m_l_f_s", token, {
    maxAge: MAX_AGE,
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });

  return token;
};

module.exports = { tokenGenerator };
