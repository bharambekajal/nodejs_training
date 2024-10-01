const http = require("http")
const fs = require("fs")
const express = require("express")


const app = express(); 

app.get("/",(req,res)=>{
    return res.send("hemo from home page")
})

app.get("/about",(req,res)=>{
    return res.send(`hemo from about page ${req.query.name} and ${req.query.age}`)
})


app.listen(8000,()=>{
    console.log("server started")
})

