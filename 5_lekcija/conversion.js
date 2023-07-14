const fruits = ["banana", "apple", "lime"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits.length);

console.log(fruits[fruits.length - 1]);
console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);

// const lastElement = fruits.pop();

fruits.push("orange");
console.log(fruits);


fruits.shift();
console.log(fruits);

fruits[0] = "banana";
console.log(fruits);