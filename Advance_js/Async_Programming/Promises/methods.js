function getData1() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("function 1");
      }, 2000); 
  });
}

function getData2() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("function 2");
      }, 3000); 
  });
}


function fetchData3() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject("Error function 3");
      }, 3000);
  });
}


//all
Promise.all([getData(), getData2()])
  .then((result) => {
      console.log("All data ");
      console.log(result);
  })
  .catch((error) => {
      console.error("error", error);
  });


//allsettled
  Promise.allSettled([fetchData1(), fetchData3()])
    .then((result) => {
        console.log("allSettled");
        console.log(result);
    });

//race
    Promise.race([fetchData1(), fetchData3()])
    .then((result) => {
        console.log("first resolved promise");
        console.log(result);
    })
    .catch((error) => {
        console.error("Error from Promise", error);
    });
