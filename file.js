// const { Console } = require('console');
// const fs=require('fs');
// //reading a file
// fs.readFile('./docs/blog.txt',(err,data)=>{
//      if(err)
//      {
//           console.log(err);
//      }
//      console.log(data.toString());

// });
// console.log("last line");

//writing files
// const fs=require('fs');
// fs.writeFile('./docs/blog.txt','hello,world',()=>{
//      console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt','new file will be created blog2',()=>{
//      console.log('file was written');
// });

//making directories
const fs = require("fs");
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

//deleting a file
if (fs.existsSync("./docs/deleteme.txt"));
{
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
