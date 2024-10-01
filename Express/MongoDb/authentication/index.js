const express = require("express")
const path = require("path")
const userRouter = require("./route/user")
const {connectMongoDb} = require("../connection")
const cookieparser = require("cookie-parser")
const { restrictTo, checkForAuthentication } =require("./middleware/auth")

const app = express();
const port = 8090;

connectMongoDb("mongodb://127.0.0.1:27017/Users").then(()=>{
    console.log("connected")
})

app.set('view engine','ejs')
app.set('views',path.resolve("./view"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(checkForAuthentication)

app.get("/url",restrictTo(["NORMAL"]),(req,res)=>{
    res.json({
        value : "Normal user"
    })
})

app.get("/admin/url",restrictTo(["ADMIN"]),(req,res)=>{
    res.json({
        value : "admin user"
    })
})

app.use("/user",userRouter)


app.use("/app",(req,res)=>{
    res.json({
        value : "auth"
    })
})

app.listen(port,()=>{
    console.log("Welcome")
})