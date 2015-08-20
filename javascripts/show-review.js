define(function(require) {
  var $ = require("jquery");

  $(document).on('click', '.glyphicon', function() {
    $(this).parent().next().toggle();
    $(this).toggleClass('glyphicon-chevron-down');
    $(this).toggleClass('glyphicon-chevron-up');
  });
});