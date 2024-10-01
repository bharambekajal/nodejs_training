function hello(){
    console.log("hello")
}

//hello will execute after 2 sec
//this timeout is also taking callback
setTimeout(hello,19000)

//this will run one by one
console.log("one")
console.log("two")

setTimeout(()=>{
    console.log("hello")
},2000)//this will run one by one

console.log("four")
console.log("five")