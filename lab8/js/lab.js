/*
 * index.js - Lab 8 - Anon Functions and Callbacks
 * Author: Jiecheng Zhu
 * Date: Nov. 4, 2023
 * License: Public Domain
 */

// Function
function makeDouble(x) {
  return x * x;
}

// Test function
console.log("2 * 2 =", makeDouble(2));
console.log("(-1) * (-1) =", makeDouble(-1));

const arrNum = [-2, 0, 2, 3, 5, 7];
console.log("My array", arrNum);

var result1 = arrNum.map(makeDouble);
console.log("Test of double array:", result1);

var result2 = arrNum.map(function(x){
  return x ** 0.5;
})
console.log("Squareroot of array:", result2);
