function add(a,b){
    console.log(a+b)
}

function calculator(a,b,add){
    add(a,b)
}

calculator(1,2,add)

//also we can do

/*
calculator(1,2,(a,b)=>{
     console.log(a+b)
 })
*/


//nested callbacks creates callback hell which makes difficult to understand and manage
//this will give output together


/*
function getData(dataID){
    setTimeout(()=>{console.log("data",dataID)},2000)
}

getData(1)
getData(2)
getData(3)
*/

//
function  getData(dataId,getDataNext){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getDataNext){
        getDataNext();
        }
    },2000)
}

//to solve this problem we have promises
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)
        })
    });
})


//above code with promises
getData(1).then()