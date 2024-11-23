const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const Port = 3000;


app.get("/",(req,res)=>{
    res.send("shubham")
})

app.listen(Port,(req,res)=>{
    console.log(`listen on port ${Port}`)
})