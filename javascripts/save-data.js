define(function(require) {

  var $ = require("jquery");

  var visited = false;

  $("#visited").click(function() {
    visited = true;
  });

  $("#wish-listh").click(function() {
    visited = false;
  });

  $("#addLocation").click(function() {

    console.log("click");

    var newLocation = {
      location: $("#location-name").val(),
      location_type: $("#location-type").val(),
      visited: visited,
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

  });

});