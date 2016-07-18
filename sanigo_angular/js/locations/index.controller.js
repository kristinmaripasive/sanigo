"use strict";

(function(){
  angular
    .module("locations")
    .controller("LocationIndexController", ["LocationFactory", "$state", LocationIndexControllerFunction])


  function LocationIndexControllerFunction(LocationFactory, $state){
    this.locations = LocationFactory.query();


    var vm = this;
    this.location = new LocationFactory();
    this.create = function(){
      console.log("working")
      this.location.$save().then(function(response){

        vm.locations.push(response)
        $state.go("locationIndex", ({id: response.id}));
      })
    }
  }


})();
