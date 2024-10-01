const express = require("express")
const studentRoute = require("./routes")
const app =express();
const port =3030;

//Help to exchange json btwn from endpoints 
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello world")
});

app.use('/api/students',studentRoute)

app.listen(port,()=>{
    console.log("app listening to port " ,port)
});