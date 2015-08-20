// Import all handlebars templates

define(function(require) {
  return {
    tripTpl: require("hbs!../templates/list-trips"),
    locTypeTpl: require("hbs!../templates/location-types")
  };
});