"use strict";

(function(){
  angular
    .module("locations")
    .controller("LocationIndexController", ["LocationFactory", LocationIndexControllerFunction
  ]);

  function LocationIndexControllerFunction(LocationFactory){
    this.locations = LocationFactory.query();




  }
})();
