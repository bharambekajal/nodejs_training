const fs = require("fs");
const os = require("os")

console.log(os.cpus.length)
//To write if we again run this it will override the value
//sync
fs.writeFileSync("./text.txt","hello there")

//Async
fs.writeFile("./text2.txt", "hey there",(err) => {})

const result = fs.readFileSync("./contacts.txt","utf-8")
console.log(result)

//async it will not return anything it will expect from us to give callback and then in that it will give result.
fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
})

//append file
fs.appendFileSync("./text.txt",` ${Date.now()} i am kajal`)

fs.copyFileSync("./text.txt","./copy.txt")

//to delele
fs.unlinkSync("./copy.txt")

//provide state of that file
console.log(fs.statSync("./text.txt"))

//boolean isfile
console.log(fs.statSync("./text.txt").isFile())

fs.mkdirSync("my-folder")


