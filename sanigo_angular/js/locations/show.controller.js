"use strict";

(function(){
  angular
    .module("locations")
    .controller("LocationShowController", ["LocationFactory", "$stateParams", LocationShowControllerFunction])

function LocationShowControllerFunction(LocationFactory, $stateParams){
  console.log($stateParams);
  this.location = LocationFactory.get({id: $stateParams.id});
}

})();
