
const express = require("express")
const mongoose = require("mongoose")
const users = require("./MOCK_DATA.json")
const app = express();
const port = 8080;

//connecting to mongo
mongoose.connect("mongodb://127.0.0.1:27017/students").then(console.log("mongo connected succesfully")).catch((err)=>{console.log("error occured")})

//building schema
const studentSchema = new mongoose.Schema({
    firstname :{
        type: String,
        required:true,
    },
    lastname:{
        type :String,
        required:true
    },
    email:{
        type:String,
        unique :true
    }
},{timestamps:true})

//building model out of that schema
const Student = mongoose.model("student",studentSchema) 

app.use(express.json())

app.use((req,res,next)=>{
    console.log("hello from middle ware 1")
//    return res.end("hello")
    next();
})
app.use((req,res,next)=>{
    console.log("hello from middle ware 2")
    next();
})

//get user
app.get('/api/users',async(req,res)=>{

    return res.json(users)
})


//repeating routes

// app.route('/api/users/:id').get('/api/users/:id',(req,res)=>{
//     const id = Number(req.params.id)
//     const user = users.find((user)=>
//         user.id===id)
//     return res.json(user)
// }).post().put()


//get by id
app.get('/api/users/:id',async(req,res)=>{
    const student = await Student.findById(req.params.id)
    if(!student) res.status(404).json({
       error_msg : "student not found"
    })
    return res.json(student)
})

app.post('/api/user',async(req,res)=>{
    const body = req.body;
    const studentResult =  await Student.create({
        firstname : body.firstname,
        lastname : body.lastname,
        email : body.email
    })
    console.log(studentResult)
    return res.status(201).json({msg:"created student in db"})
})

app.put('/api/users/:id',async(req,res)=>{
    await Student.findByIdAndUpdate(req.params.id,{lastname:"changed Value"})

    return res.json({status:"student updated"})
})

app.delete('/api/users/:id',async(req,res)=>{
    await Student.findByIdAndDelete(req.params.id)

    return res.json({status:"student deleted"})
})

app.listen(port,()=>{
    console.log("Welcome")
})