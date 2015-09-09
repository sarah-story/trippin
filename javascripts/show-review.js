define(function(require) {
  var $ = require("jquery");

  //Show review when the down arrow is clicked
  $(document).on('click', '.glyphicon', function() {
    $(this).parent().next().toggle();
    $(this).toggleClass('glyphicon-chevron-down');
    $(this).toggleClass('glyphicon-chevron-up');
  });
});