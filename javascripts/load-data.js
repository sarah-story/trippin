define(function(require) {
  var firebase = require("firebase");
  var templates = require("get-templates");
  var $ = require("jquery");

  var ref = new Firebase("https://trippin-nss.firebaseio.com/");

  // Load location type data and populate select box using handlebars template
  ref.child("location_types").on("value", function(snapshot) {
    var location_types = snapshot.val();

    var populatedTemplate = templates.locTypeTpl(location_types);

    $("#location-type").html(populatedTemplate);
    console.log(location_types);
  });


  // Load trip data and populate page using handlebars template
  ref.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();

    var populatedTemplate = templates.tripTpl(trips);

    $("#list-of-trips").html(populatedTemplate);
    console.log(trips);
  });
});