const userModel = require("../models/userModel");

async function addResumeDataController(req, res) {
  try {
    const data = req.body;
    console.log(data);
    const newData = await userModel.findOneAndUpdate(
      { email: data.email },
      data
    );
    res.send({
      status: true,
      message: "data added successfully!",
    });
  } catch (err) {
    res.send({
      status: false,
      message: err.message,
    });
  }
}
module.exports = addResumeDataController;
