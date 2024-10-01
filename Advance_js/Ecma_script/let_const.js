//Both are having block scope 
var x = 10;
{
  let x = 2;
}

console.log(x)

var y = 10;
{
  const y = 2;
}
console.log(y)