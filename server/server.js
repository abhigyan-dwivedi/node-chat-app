const path=require('path')
const express =require('express');
const socketIO=require('socket.io');

const port=process.env.PORT||3000;


var publicPath=path.join(__dirname,'../public');
console.log(publicPath);

var app=express();

app.use(express.static(publicPath));


app.listen(port,()=>{
  console.log(`Server started listening on port ${port}`);
});
