const express = require("express")
const { handleAddUserSignup ,handleAddUserlogIn} = require("../controller/userController");

const router = express.Router();

router.post('/',handleAddUserSignup)

router.post('/login',handleAddUserlogIn)

router.get('/signup',(req,res)=>{
    res.render('signup')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

module.exports = router;