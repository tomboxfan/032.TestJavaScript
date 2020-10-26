


function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

console.log(myFunction(2,3)); //6

function contains(mainStr, subStr) {
  return mainStr.indexOf(subStr)!=-1;
}

console.log(contains("Hello world!", "world!"));
console.log(contains("Hello world!", "Hello"));
console.log(contains("Hello world!", "Java"));
