const express = require("express")
const path = require("path")
const studentRouter = require("./routes/user")
const {connectMongoDb} = require("../connection")
const { logReqRes } = require("./middlewares");

const app = express();
const port = 8080;


connectMongoDb("mongodb://127.0.0.1:27017/students").then(()=>{
    console.log("connected")
})

app.set('view engine','ejs')
app.set('views',path.resolve("./views"))

app.use(express.json())

app.get("/test",(req,res)=>{
    return res.render('home',{
        name:"kajal"
    })
})

app.use("/user",studentRouter)

app.use(logReqRes("log.txt"));

/*
app.use((req,res,next)=>{
    console.log("hello from middle ware 1")
//    return res.end("hello")
    next();
})
app.use((req,res,next)=>{
    console.log("hello from middle ware 2")
    next();
})

get user
app.get('/api/users',async(req,res)=>{

    return res.json(users)
})


repeating routes

app.route('/api/users/:id').get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=>
        user.id===id)
    return res.json(user)
}).post().put()


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

*/
app.listen(port,()=>{
    console.log("Welcome")
})