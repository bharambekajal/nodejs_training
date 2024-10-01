const {  getUser} = require("../service/auth")

async function checkForAuthentication(req,res,next){
    // const authenticationHeaderValue = req.headers["authorization"]
const tokenCookie = req.cookies?.token;
    req.use = null;

    if(!tokenCookie)
        return next();
    
    const token = tokenCookie
    const user = getUser(token)
    req.user = user;
    next()

}

//it will restrict
function restrictTo(roles) {
    return function(req,res,next){
        if(!req.user) return res.render("login");

        if(!roles.includes(req.user.role)) return res.end("UnAuthorised")
        return next();
    }
}

// async function restrictToLogInUserOnly(req,res,next) {
    
//  //   const userUid = req.cookies?.uid;
//     const userUid= req.headers["Authorization"]

//     if(!userUid) return res.redirect('login')

//     const token = userUid.split("Bearer ")[1]

//     const user = getUser(userUid);


//     if(!user) return res.redirect('login')

//     res.user =user;
//     next();

// }

// async function checkAuth(req,res,next) {

//     const userUid= req.headers["Authorization"]
//     const token = userUid.split("Bearer ")[1]

//     const user  = getUser(token);
//     req.user = user;
//     next();
    

    
// }

module.exports = {
    checkForAuthentication,
    restrictTo
}