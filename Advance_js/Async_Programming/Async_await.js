function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Promise")
            resolve(100)
        },2000)
    })
}

async function getDataFn() {
    await getData();
    await getData();
} 