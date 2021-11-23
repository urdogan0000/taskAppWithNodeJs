const express = require("express");
const { body } = require("express-validator");
const authController = require("../controllers/authController");
const User = require("../models/User");
const router = express.Router();

router.route("/").post(
  [
    body("username").not().isEmpty().withMessage("Please Enter Your UserName"),

    body("email")
      .isEmail()
      .withMessage("Please Enter Valid Email")
      .custom((userEmail) => {
        return User.findOne({ email: userEmail }).then((user) => {
          if (user) {
            return Promise.reject("Email is already exists!");
          }
        });
      }),

    body("password").not().isEmpty().withMessage("Please Enter A Password"),
  ],
  authController.createUser
);

module.exports = router;
