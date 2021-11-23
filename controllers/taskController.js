const Task = require("../models/Task");


exports.getTasks =async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({
    tasks,
  });
};

exports.createTask = async (req, res) => {
  try {
    await Task.create(req.body);
    res.status(201).send("başarılı");
  } catch (error) {
    res.status(400).json({
      status: "error",
      error,
    });
  }
};
