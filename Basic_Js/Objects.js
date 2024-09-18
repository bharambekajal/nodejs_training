const person = {firstName:"kajal", lastName:"bharambe", age:0};
console.log(person)
console.log(person.firstName)
console.log(person["lastName"])


const person2 = {
    firstName: "kajal",
    lastName : "bharambe",
    fullName : function() {
      return this.firstName + " " + this.lastName + " "+ this.newProperty ;
    }
  };


person2.firstName = "joi"
person2.newProperty = "value"
console.log(person2.fullName())
delete person2.newProperty

const arr = Object.values(person2);
console.log(arr)

let str = JSON.stringify(person2);

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

const obj = new Person("name","k",5)