define(function(require) {
  var firebase = require("firebase");
  var ref = new Firebase("https://trippin-nss.firebaseio.com/");

  ref.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();

    console.log(trips);
  })
});