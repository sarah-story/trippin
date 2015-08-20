define(function(require) {
  var $ = require("jquery");

  var firebase = require("firebase");

  var selectedTripId;

  $(document).on("click", "button[id^='cross-off#']", function() {
    console.log('click');
    selectedTripId = $(this).attr("id").split("#")[1];
    var ref = new Firebase("https://trippin-nss.firebaseio.com/trips/" + selectedTripId);
    ref.update({'visited': 'true'});
    $("#allTab").click();
  });
});