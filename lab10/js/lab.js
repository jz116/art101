/*
 * index.js - Lab 10 - JavaScript for the Web
 * Author: Jiecheng Zhu
 * Date: Nov. 17, 2023
 * License: Public Domain
 */

// Functions
function generateRandomText() {
  const text = "The customer is very important, the customer will be followed by the customer. But at the same time they happened with great labor and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();
  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
