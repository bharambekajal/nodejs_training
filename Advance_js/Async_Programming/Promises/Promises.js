let promise = new Promise((resolve,reject)=>{
    console.log("I am a promise ")
    resolve(123)
})


let promise2 = new Promise((resolve,reject)=>{
    console.log("I am a promise ")
     reject("'some error")
})


//this will return promise obj
function getData(dataId,getDataNext){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success")
            if(getDataNext){
            getDataNext();
            }
        },2000)
    })
}
let result = getData(1)

const getPromise = () =>{
     new Promise((resolve,reject) =>{
        console.log("i am a promise");
 //       resolve("success")
        reject("some error")
     })
}

let promise3 = getPromise();
promise3.then(()=>{
    console.log("Promise fulfilled");
})

promise3.catch((err)=>{
    console.log(err)
})


function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("some data 1");
            resolve("Success")
        },2000)
    })
}

function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("some data 1");
            resolve("Success")
        },2000)
    })
}

console.log("fetching data 1......")
let p1 = asyncFunction();
p1.then((res)=>{
    console.log(res)
    console.log("fetching data 2......")
    let p2 = asyncFunction2();
    p2.then((res)=>{
    console.log(res)
});
});

// console.log("fetching data 2......")
// let p2 = asyncFunction2();
// p2.then((res)=>{
//     console.log(res)
// })




function getData(dataId){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success")
        },2000)
    })
}

//using callback chain
getData(1).then((res)=>{
    return getData(2).then((res)=>{
        return getData(3).then((res)=>{
            console.log("Success")
        })
    })
})