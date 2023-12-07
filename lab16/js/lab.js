/*
 * index.js - Lab 16 - JSON and APIs (XKCD comic!)
 * Author: Jiecheng Zhu
 * Date: Dec. 6, 2023
 * License: Public Domain
 */

const endPoint = "https://api.nasa.gov/planetary/apod";
const apiKey = "BRj9Y1GnsfawWt7uej3MJ0HbY5XNsG0JAFkilD0g";

// add button event listener
$(document).ready(function(){
  $("#generate").click(function(){
    console.log("Click");
    // construct ajax object
    const ajaxParams = {
      url: endPoint,
      data: {api_key: apiKey},
      type: "GET",
      dataType: "json",
      success: ajaxSuccess,
      error: ajaxError
    }
    $.ajax(ajaxParams);
  });
});

// functions
function ajaxSuccess(comicObj){
  console.log("Here's what I got:", comicObj);
  const title = comicObj.title;
  const desc = comicObj.explanation;
  const imageURL = comicObj.url;
  $("#output").append("<h3>" + title + "</h3>");
  $("#output").append("<img src='" + imageURL + "' />");
  $("#output").append("<p>" + desc + "</p>");
}

function ajaxError(request, error){
  console.log("Oops:", request, error);
}
