const User = require("../models/User");
const { validationResult } = require('express-validator');

exports.createUser = async (req, res) => {
    try {
      
      await User.create(req.body);
      res.status(201).send("başarılı");
    } catch (error) {
      const errors = validationResult(req);
     
      res.status(400).json({
        status: "error",
        errors,
      });
    }
  };