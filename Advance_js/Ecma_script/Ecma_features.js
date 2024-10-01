var x = function(x, y) {
    return x * y;
 }
 
 //we dont need function keyword and return  
const y = (x, y) => x * y;
console.log(y(2,3))


//distructing object
 const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
let { firstName, age } = person;

console.log(firstName)
console.log(age)


//distructing array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let [fruit1, fruit2] = fruits;
console.log(firstName)
console.log(age)

//spread operator
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year)
const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);
console.log(maxValue)


//for of
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}

console.log(text)

//map key can be objects too
const fruit = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
  ]);

// Add some values to the Set
const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters)


//class 
class ClassName {
  constructor() {}
}

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1)
console.log(myCar2)

//symbol type
const persons = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let id = Symbol('id');
persons[id] = 140353;

console.log(person[id])
console.log(person.id)

//default paramter value
function myFunction(x, y = 10) {
  return x + y;
}
console.log(myFunction(5));


//... this will take infinte number of arguments
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let xy = sum(4, 9, 16, 25, 29, 100, 66, 77);

//return boolean
let text1 = "Hello world, welcome to the universe.";
console.log(text1.includes("world"))

let text2 = "Hello world, welcome to the universe.";
console.log(text2.startsWith("Hello")) 

var text3 = "John Doe";
text3.endsWith("Doe") 

//entries will create a key value pair with arrays 
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits2.entries();
console.log(f)

//create array from string
console.log(Array.from("ABCDEFG"));

//keys
const keys = fruits2.keys();
for (let x of keys) {
  console.log(x)
}

//find
//return first one 
const numbers1 = [4, 9, 16, 25, 29];
let first = numbers1.find(myFunction);
let firstIndex = numbers1.findIndex(myFunction);
console.log(firstIndex)

function myFunction(value, index, array) {
  return value > 18;
}

console.log(first)
console.log(firstIndex)

