"use strict";

(function(){
  angular
  .module("locations")
  .controller("LocationEditController", ["LocationFactory", "$stateParams", "$state", LocationEditControllerFunction])

  function LocationEditControllerFunction(LocationFactory, $stateParams, $state){
    console.log($stateParams)
    this.location = LocationFactory.get({id: $stateParams.id})
    this.update = function(){
      this.location.$update({id: $stateParams.id}).then(function(response){
        $state.go("locationIndex", ({id: response.id}));
      })
    }
    this.destroy = function(){
      this.location.$delete({id: $stateParams.id}).then(function(response){
        $state.go("locationIndex");
      })
    }
  }
})();
