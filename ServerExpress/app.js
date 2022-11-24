const express = require("express");
const path =require("path")
const app = express();
app.get("/",(req,res)=>{
    // res.send("hello world");
    res.sendFile(path.join(__dirname +"/index.html"));
});
app.get("/voice",(req,res)=>{
    // res.send("hello world");
    res.sendFile(path.join(__dirname +"/voice.html"));
});
app.get("/demo",(req,res)=>{
    // res.send("hello world");
    res.sendFile(path.join(__dirname +'/demo1.html'));
});

app.listen(3000,()=>{
    console.log("Server running on port:",3000);
});

