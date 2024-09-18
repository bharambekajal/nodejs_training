let name = "Kajal"

//template string also allow multiline strings
let text = `this's "DemoString"`;

console.log(name.length)

let txt = "hello\"world\"."
console.log(txt)


let str = new String("Kajal")
console.log(str)

//strings are immutable it will return new string 
console.log(str.charAt(2))
console.log(str.charCodeAt(2))

console.log(str.at(2))
console.log(str.at(-1))

console.log(str.slice(1, 4));
console.log(str.slice(2));
console.log(str.slice(-2));

console.log(str.substring(1, 5));

console.log(str.substr(1, 2));

console.log(str.toLowerCase());
console.log(str.toUpperCase());

let txt1 = "Hello";
let txt2 = "World";
console.log(txt1.concat(" ", txt2));
console.log("Hello" + " "+"World")


let text1 = "      hello, world hello  ";
console.log(text1.trim());
console.log(text1.trimStart());
console.log(text1.trimEnd());

let a = "5";
console.log(a.padStart(4,"0"));
console.log(a.padEnd(4,"0"));

console.log(a.repeat(4));

console.log(text1.replace("hello","jello"))
console.log(text1.replaceAll("hello","jello"))

console.log(text1.split(","))
console.log(text1.split(" "))

//return the 1st occurence
let txt3 = "Please locate where 'locate' occurs!";
console.log(txt3.indexOf("locate"));
console.log(txt3.lastIndexOf("locate"));
console.log(txt3.indexOf("locate",2));

console.log(txt3.search("locate"));