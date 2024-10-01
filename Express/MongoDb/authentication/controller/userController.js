const User = require("../model/user")
const {v4:uuidv4} = require("uuid")
const {setIDtoUser,getUser}= require("../service/auth")

async function handleAddUserSignup(req,res) {
const {name,email,password} = req.body;
   const user = await User.create({
    name,
    email,
    password
   })
    return res.redirect("/user")
}

async function handleAddUserlogIn(req,res) {
    const {email,password} = req.body;
    const user = await User.findOne({email,password});
    if(!user)
        return res.render('login',{

    error : "Invalid Username or password"});
    
    const token = setIDtoUser(user)

    res.cookie("token",token)
    // res.json({token})

    return res.redirect("/")
    }
    
module.exports = {
    handleAddUserSignup, handleAddUserlogIn
}