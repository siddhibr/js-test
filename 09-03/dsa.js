// / Find the Average Age
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
//   { name: 'David', age: 28 },
// ];




// Q.2

const names = ["Alice", "Bob", "Anna", "Alex", "Charlie", "Amanda"];

const namesStartingWithA = names.filter(name => name.startsWith('A'));

const count = namesStartingWithA.length;

console.log("Number of names starting with 'A':", count);

// Q.3

// Find the Two Numbers with the Maximum Sum


const numbers = [10, -2, 8, 15, -5, 20, 3];

const maximum = numbers.sort((a,b)=>b-a);
console.log([maximum[0],maximum[(1)]]);

let max1 = Math.max(...numbers);
let maxx = numbers.filter((num)=>num !=max1);
let max2 = Math.max(...maxx);
console.log([max1,max2]);
