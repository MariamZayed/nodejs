const express=require("express");
const cors=require("cors");
const teacherRoute=require("./Routes/teacherRoute");
const childRoute=require("./Routes/childRoute");
const classRoute=require("./Routes/classRoute");
const mongoose = require("mongoose");

/************** server */
const server=express();   //http.createServer()
let port=process.env.PORT||8080; //swagger

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/nursrySystemDB")
        .then(()=>{
            console.log("DB Connected");
            server.listen(port,()=>{
            console.log("server is listenng.....",port);
});
        })
        .catch((error)=>{
            console.log("DB Problem: "+error);
        })
/******************* */

server.use(cors());  
server.use((request,response,next)=>{
    console.log(request.url,request.method);
    next();
});

server.use(express.json());
server.use(express.urlencoded({extended:true}));

//Routes  
server.use(teacherRoute);
server.use(childRoute);
server.use(classRoute);



//-------Not found MW
server.use((request,response)=>{

    response.status(404).json({message:"Not Found"});

});
//-------Error MW
server.use((error,request,response,next)=>{
    let status=error.status||500;
    response.status(status).json({message:error+""});
})






