const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const blogSchema=new Schema({//propeties yu want in your blog
title:{
     type:String,
     required:true
},
snippet:{
     type:String,
     required:true
},
body:{
type:String,
required:true
}
},{timestamps:true});

const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;