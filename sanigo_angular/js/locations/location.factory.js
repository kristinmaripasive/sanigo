"use strict";

(function(){
  angular
    .module("locations")
    .factory("LocationFactory", ["$resource", LocationFactoryFunction])

 function LocationFactoryFunction($resource){
   return $resource("https://sanigo.herokuapp.com/locations/:id", {}, {
     update: { method: "PUT" }
   });
 }
}());
