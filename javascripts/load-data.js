define(function(require) {
  var firebase = require("firebase");
  var templates = require("get-templates");
  var $ = require("jquery");

  var ref = new Firebase("https://trippin-nss.firebaseio.com/");

  ref.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();

    var populatedTemplate = templates.tripTpl(trips);

    $("#list-of-trips").html(populatedTemplate);
    console.log(trips);
  });
});