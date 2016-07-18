"use strict";

(function(){
  angular
    .module("locations")
    .factory("LocationFactory", ["$resource", LocationFactoryFunction])

 function LocationFactoryFunction($resource){
   return $resource("http://localhost:3000/locations/:id", {}, {
     update: { method: "PUT" }
   });
 }
}());
