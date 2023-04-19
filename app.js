const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const { result } = require("lodash");
const blogRoutes=require('./routes/blogRoutes');
//express app
const app = express(); //invoking that function to create an instance of an express app which we storing in app const
// mongoose.set("strictQuery", true);
// const dbURL = "mongodb+srv://shiva8004:test@nodejstut.baipdd6.mongodb.net/NodeTut?retryWrites=true&w=majority";

// mongoose
//   .connect(dbURL)
//   .then(() => {
//     console.log("Database Connected");
//     app.listen(3000, () => {
//       console.log("Listening Started");
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
mongoose.connect("mongodb://localhost:27017/blog",{
  useNewUrlParser:true,//to avoid deprication warning
  useUnifiedTopology:true
})
.then((result)=>app.listen(3000,()=>{
  console.log("Server started listening on port no. 3000");
}) )
.catch((err)=>{
console.log(err);
}
)

// It Will set view engine as ejs files and look for files with extension .ejs
app.set("view engine", "ejs");

//middleware for sttiac files : These all are also called as third party middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //this will take all url encoded data that comes along for the ride and it passes taht in to an object that we can use on the request oject
app.use(morgan("tiny"));

// Redirecting all request coming from / to /blogs
app.get("/", (req, res) => {
  res.redirect("/blogs");
});
// Handles all requests that comes from path /about
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
//blog routes
app.use('/blogs',blogRoutes);
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
