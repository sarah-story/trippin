define(function(require) {

  var $ = require("jquery");

  // Default value for if the site has been visited is false
  var visited = false;


  // Set visited value when the user choose a value from the button group
  $("#visited").click(function() {
    visited = true;
  });

  $("#wish-listh").click(function() {
    visited = false;
  });

  // Get all values from the form and add to firebase
  $("#addLocation").click(function() {
    var zoom;

    if ($("#location_type").val() === "0") {
      zoom = 13;
    } else if ($("#location_type").val() === "1") {
      zoom = 6;
    } else {
      zoom = 4;
    }

    var newLocation = {
      location: $("#location-name").val(),
      location_type: $("#location-type").val(),
      visited: visited,
      zoom: zoom
    };

    console.log("newLocation", newLocation);
  
    $.ajax({
      url: "https://trippin-nss.firebaseio.com/trips.json",
      method: "POST",
      data: JSON.stringify(newLocation)
    })
    .done(function(newData) {
      console.log("newData", newData);
    })
    .fail(function(xhr, status, error) {
      console.log("error", error);
    });

    $("#allTab").click();
  });

});