define(function(require) {
  var firebase = require("firebase");
  var templates = require("get-templates");
  var $ = require("jquery");

  var ref = new Firebase("https://trippin-nss.firebaseio.com/");

  // Load location type data and populate the form select box using handlebars template
  ref.child("location_types").on("value", function(snapshot) {
    var location_types = snapshot.val();

    var populatedTemplate = templates.locTypeTpl(location_types);

    $("#location-type").html(populatedTemplate);
  });


  // Load trip data and populate main page using handlebars template
  ref.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();

    var populatedTemplate = templates.tripTpl(trips);

    $("#list-of-trips").html(populatedTemplate);

    $(".addReviewButton").filter("[visited='false']").hide();
    $(".crossOffButton").filter("[visited='true']").hide();
  });
});