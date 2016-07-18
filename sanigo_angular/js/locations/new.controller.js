"use strict";

(function(){
  angular
    .module("locations")
    .controller("LocationNewController", ["LocationFactory", "$state", LocationNewControllerFunction])

function LocationNewControllerFunction(LocationFactory, $state){
  this.location = new LocationFactory();
  this.create = function(){
    this.location.$save().then(function(response){
      $state.go("locationIndex", ({id: response.id}));
    })
  }
}

})();
