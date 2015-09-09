define(function(require) {
  var $ = require("jquery");
  var firebase = require("firebase");

  var selectedTripId;

  //When the add review button is clicked
  $(document).on("click", "button[id^='add-review#']", function() {
    //get the id of the trip the user wants to add a review to
    selectedTripId = $(this).attr("id").split("#")[1];
    //show the add review form
    $("#addReview").toggle();
  });

  //When the save review button is clicked
  $("#saveReview").click(function() {
    //Save the review to firebase
    var ref = new Firebase("https://trippin-nss.firebaseio.com/trips/" + selectedTripId);
    now = new Date().toJSON().slice(0,10);
    ref.child('reviews').push({
      date: now,
      text: $("#addReviewInput").val(),
      title: $("#titleInput").val()
    });
    //Hide the add review form and clear the inputs
    $("#addReview").hide();
    $("addReviewInput").val("");
    $("titleInput").val("");
  });
});