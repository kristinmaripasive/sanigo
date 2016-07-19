"use strict";
var initMap;
(function(){
  angular
    .module("locations")
    .controller("MapIndexController", ["LocationFactory", MapIndexControllerFunction])


  function MapIndexControllerFunction(LocationFactory){
    this.locations = LocationFactory.query()

  }


})();
