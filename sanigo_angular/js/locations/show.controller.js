"use strict";

(function(){
  angular
  .module("locations")
  .controller("LocationShowController", ["LocationFactory", "$stateParams", "CommentFactory", LocationShowControllerFunction])




  function LocationShowControllerFunction(LocationFactory, $stateParams, CommentFactory){
    console.log($stateParams);
    this.location = LocationFactory.get({id: $stateParams.id});

    this.comment = CommentFactory.query()
  }



})();
