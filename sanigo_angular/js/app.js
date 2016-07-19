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
    .state("mapIndex", {
      url: "/map",
      templateUrl: "js/locations/map.html.erb",
      controller: "MapIndexController",
      controllerAs: "MapIndexViewModel"
    })
    .state("locationShow", {
      url: "/locations/:id",
      templateUrl: "js/locations/show.html",
      controller: "LocationShowController",
      controllerAs: "LocationShowViewModel"
    });
  }

  })();
