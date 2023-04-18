//global object

setTimeout(()=>{
     console.log("in the timeout");
     clearInterval(int);//clear interval will stop int after 3 sec


},3000);

const int=setInterval(()=>{
  console.log("in the inter val of 1 sec it will repeat infinitely");
},1000)

console.log(__dirname)//gives absolute path of the folder name currently working on
console.log(__filename)//gives absolute path of the folder name currently working on with file name

console.log(document.querySelector);//error document is  windows object we dont have it in global namespace

