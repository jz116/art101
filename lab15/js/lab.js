/*
 * index.js - Lab 15 - AJAX
 * Author: Jiecheng Zhu
 * Date: Dec. 2, 2023
 * License: Public Domain
 */

// Star Wars API
/*
import { axios } from "@pipedream/platform"
export default defineComponent({
  props: {
    swapi: {
      type: "app",
      app: "swapi",
    }
  },
  async run({steps, $}) {
    return await axios($, {
      url: `https://swapi.dev/api/films/1/`,
    })
  },
})
*/

// AJAX
$(document).ready(function() {
  $("#activate").click(function() {
    $.ajax({
      url: "https://swapi.dev/api/films/1/",
      type: "GET",
      dataType: "json",
      data: {
        id: 1,
        api_key: "blahblahblah",
      },
      success: function(data) {
        // Display the output in the output div
        $("#output").text(JSON.stringify(data, null, 2));
        console.log(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        // Handle errors
        $("#output").text(JSON.stringify(jqXHR, null, 2));
        console.log("Error:", textStatus, errorThrown);
      }
    });
  });
});
