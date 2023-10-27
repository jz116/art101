/*
 * index.js - Lab 6: Arrays and Objects
 * Author: Jiecheng Zhu
 * Date: Oct. 27, 2023
 * License: Public Domain
 */

// Define Variables
myTransport = ["car", " bus", " subway", " train", " bicycle", " airplane"];

// create an object for may main ride
myMainRide = {
  make: "Ford",
  model: "Taurus",
  color: "Rusty",
  year: 1995,
  age: function() {
    return 2023 - this.year;
  }
}

// output
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
