define(function(require) {

  var $ = require("jquery");
  
  $("#addTab").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
    $("#location-form").show();
    $(".trip-info").hide();
  });

  $("#allTab").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
    $("#location-form").hide();
    $(".trip-info").show();
  });

  $("#wishTab").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
    $("#location-form").hide();
    $(".trip-info").filter("[visited='false']").show();
    $(".trip-info").filter("[visited='true']").hide();
  });

  $("#visitedTab").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
    $("#location-form").hide();
    $(".trip-info").filter("[visited='true']").show();
    $(".trip-info").filter("[visited='false']").hide();
  });
  
});