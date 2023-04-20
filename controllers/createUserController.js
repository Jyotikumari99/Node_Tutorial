const createUser = require("../models/createUser");
const registerUser = (req, res) => {
  const user = new createUser(req.body);
  user
    .save()
    .then(() => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await createUser.findOne({ username, password });
    if (!user) {
      return res.status(404).send("Incorrect Username or Password");
    }
    res.redirect("/blogs");
  } catch (error) {
    res.status(400).send("Something error occurred at backend");
  }
};
module.exports = {
  registerUser,
  loginUser,
};
