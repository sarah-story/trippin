define(function(require) {
  var $ = require("jquery");
  var firebase = require("firebase");

  var selectedTripId;

  $(document).on("click", "button[id^='add-review#']", function() {
    console.log('click');
    selectedTripId = $(this).attr("id").split("#")[1];
    $("#addReview").toggle();
  });

  $("#saveReview").click(function() {
    var ref = new Firebase("https://trippin-nss.firebaseio.com/trips/" + selectedTripId);
    now = new Date().toJSON().slice(0,10);
    ref.child('reviews').push({
      date: now,
      text: $("#addReviewInput").val(),
      title: $("#titleInput").val()
    });
    $("#addReview").hide();
    $("addReviewInput").val("");
    $("titleInput").val("");
  });
});