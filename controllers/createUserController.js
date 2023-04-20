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
const loginUser = (req, res) => {};
module.exports = {
  registerUser,
};
