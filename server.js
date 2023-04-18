const http = require("http");
const fs = require("fs");
const _=require("lodash")
const server = http.createServer((req, res) => {
  //lodash

  const num=_.random(0,20);//print random number in console
  console.log(num);

  const greet =_.once(()=>{
  console.log('hello');
  });
  greet();
  greet();//it iwll not allow to run twice it will run only once
  
  //set  header content type
  res.setHeader("content-Type", "text/html");
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200; //if everything runs fine

      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200; //if everything runs fine

      break;

    case "/about-me":
      res.statusCode = 301; //RESOURCE IS PERMANENTLY MOVED from about me to about seo will redirect there
      res.setHeader("location", "/about"); //about me will redirect to about page
      break;
    default: //if everything runs fine
      path += "404.html";
      res.statusCode = 404;
      res.end();
      break;
  }
  //send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end(); //it will stop hangiing the req it willend the req
    }
    //res.write(data); used to write m oultiple data or these two line can be cobined
    //res.end();
    else {
      res.end(data);
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("listening  to port 3000");
});
