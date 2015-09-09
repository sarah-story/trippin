define(function(require) {
  var $ = require("jquery");
  var firebase = require("firebase");

  var selectedTripId;

  //When the 'cross it off my bucket list' button is clicked
  $(document).on("click", "button[id^='cross-off#']", function() {
    //Get the id of the trip the user selected
    selectedTripId = $(this).attr("id").split("#")[1];
    //Update firebase
    var ref = new Firebase("https://trippin-nss.firebaseio.com/trips/" + selectedTripId);
    ref.update({'visited': 'true'});
    //Go to the all view
    $("#allTab").click();
  });
});