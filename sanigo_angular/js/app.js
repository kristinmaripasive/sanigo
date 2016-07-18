"use strict";

(function(){
  angular
    .module("sanigo", [
      "ui.router",
      "locations"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])

function RouterFunction($stateProvider){
  $stateProvider
    .state ("locationMain", {
      url: "/",
      templateUrl: "js/locations/main.html"
    })
    .state("locationIndex", {
      url: "/locations",
      templateUrl: "js/locations/index.html",
      controller: "LocationIndexController",
      controllerAs: "LocationIndexViewModel"
    })
    .state("locationEdit", {
      url: "/locations/:id/edit",
      templateUrl: "js/locations/edit.html",
      controller: "LocationEditController",
      controllerAs: "LocationEditViewModel"
    })
    .state("locationShow", {
      url: "/locations/:id",
      templateUrl: "js/locations/show.html",
      controller: "LocationShowController",
      controllerAs: "LocationShowViewModel"
    });
  }

  })();
