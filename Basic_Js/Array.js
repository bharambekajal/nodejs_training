const cars = ["saab", "volvo", "bmw"];

console.log(cars[0])
cars[0] = "Opel";
console.log(cars[0])

//to convert into string
console.log(cars.toString())

console.log(cars.length)

cars.push("eco sport");

cars.pop();

console.log(cars.toString())

console.log(typeof cars)

//to check Array
console.log(Array.isArray(cars))

console.log(cars.join(" * "))

//remove 1st element
console.log(cars.shift())
console.log(cars.toString())
console.log(cars.unshift("Dm"))
console.log(cars.toString())

//this put holes in array
delete cars[0];

const ar1 = ["a", "b"];
const ar2 = ["c", "d", "e"];
console.log(ar1.concat(ar2));
console.log(ar1.concat("r"));

console.log(cars.copyWithin(2, 0))

const arr = [[1,2],[3,4],[5,6]];
console.log(arr.flat());

const arr2 = [1,2,3,4] 
console.log(arr2.flatMap(x => [x, x * 10]));

console.log(arr2.splice(2, 0, 5, 6));

console.log(arr2.slice(1));

console.log(arr2.indexOf(4));
console.log(arr2.toString());

console.log(cars.includes("volvo"));
console.log(cars.toString())

//change original array
console.log(cars.sort());
//creates new array
console.log(cars.toSorted());


console.log(cars.reverse());
//create new array
console.log(cars.toReverse());


cars.forEach((ele)=>{
    console.loge(ele)
})