const http = require("http")
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req,res)=>{

    if(req.url==="/favicon.ico"){
        return res.end();
    }

    const myUrl = url.parse(req.url,true);
    console.log(myUrl)

    const log = `${Date.now()}: ${req.url} : ${req.method} : new request received \n`
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myUrl.pathname){
            case "/about":
                const name = myUrl.query.name
                res.end(`${name} : my name`)
                         break;
            case "/":res.end("Home Page")
                       break;
            default:res.end("Default value")
        }
        res.end("log added")
    })
    console.log("creating server")

})

myServer.listen(8000,()=>{
    console.log("server started")
})

