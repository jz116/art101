/*
 * index.js - Lab 7 - Functions
 * Author: Jiecheng Zhu
 * Date: Nov. 1, 2023
 * License: Public Domain
 */

// Functions
// sortUserName - a function that takes user input and sorts the letters of their name
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log ("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log ("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  document.writeln("Here is your sorted name: ", nameArraySort, "</br>");
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log ("nameSorted =", nameSorted);
  // return result
  return nameSorted;
}

document.writeln("Oh hey, I've fixed your name: ", sortUserName(), "</br>");
