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
    .state("locationNew", {
      url: "/new",
      templateUrl: "js/locations/new.html",
      controller: "LocationNewController",
      controllerAs: "LocationNewViewModel"
    })
    .state("locationIndex", {
      url: "/locations",
      templateUrl: "js/locations/index.html",
      controller: "LocationIndexController",
      controllerAs: "LocationIndexViewModel"
    })
    .state("locationMap", {
      url: "/map",
      templateUrl: "js/locations/map.html",
      controller: "MapIndexController",
      controllerAs: "MapIndexViewModel"
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
