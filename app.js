const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { result } = require("lodash");
//express app
const app = express(); //invoking that function to create an instance of an express app which we storing in app const
mongoose.set("strictQuery", true);
const dbURL = "mongodb+srv://shiva8004:test@nodejstut.baipdd6.mongodb.net/NodeTut?retryWrites=true&w=majority";

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Database Connected");
    app.listen(3000, () => {
      console.log("Listening Started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
// mongoose.connect("mongodb://localhost:27017/blog",{
//   useNewUrlParser:true,//to avoid deprication warning
//   useUnifiedTopology:true
// })
// .then((result)=>app.listen(3000,()=>{
//   console.log("Server started listening on port no. 3000");
// }) )
// .catch((err)=>{
// console.log(err);
// }
// )

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

//It will handle all the redirected and request that are comming from path /blogs
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) //sort acc to newest to oldest
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
  // res.render("index", { title: "All Blogs", blogs: result });
});

// Handles all requests that comes from path /about
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.post("/blogs", (req, res) => {
  //you can now access request body that contain all the information we need from the webform let me just log this to the console so i can show you request body
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id).then((result) => {
    res.render("details", { blog: result, title: "blog details" }).catch((err) => {
      console.log(err);
    });
    //it is a ajax req so we can;t do that in redirect we have to send json or text data sned some json data back to the browser json have a redirect property url whwere you want to redirect that is done on frontend you cant do it in server it is a jaxreq
    app.delete("/blogs/:id", (req, res) => {
      const id = req.params.id;
      Blog.findByIdAndDelete(id)
        .then((result) => {
          res.json({ redirect: "/blogs" });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
  console.log(id);
});

//404 page middleware  code will neve reach to the above handlers
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
