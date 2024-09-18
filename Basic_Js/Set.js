const set1 = new Set(["a","b","c"]);

const set2 = new Set();
set2.add(1);
set2.add(2);

for(const i of set2){
    console.log(i)
}

set2.forEach((i)=>console.log(i))

//are objects
console.log(typeof set2); 

console.log(set2.has(1));

const iterator = set2.values()
iterator.forEach((i)=>console.log(i))

const iterator2 = set2.keys()
iterator2.forEach((i)=>console.log(i))