"use strict";

(function(){
  angular
    .module("locations")
    .controller("LocationIndexController", ["LocationFactory", "$resource", LocationIndexControllerFunction
  ]);

  function LocationIndexControllerFunction(LocationFactory, $resource){
    var vm = this;
    vm.data = data;
    var Location = $resource("/locations/:id.json", {}, {
      update: {method: "PUT"}
    });
    vm.data = Location.query();




  }
})();
