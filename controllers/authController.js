const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    await User.create(req.body);

    res.status(201).send("success");
  } catch (error) {
    res.status(400).json({
      status: "error",
      error,
    });
  }
};
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      await bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          res.status(200).json({
            status: "success",
            userId: user._id,
          });
        } else {
          res.status(400).json({
            status: "failed",
            error: "wrong credentials",
          });
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "error",
      error,
    });
  }
};
