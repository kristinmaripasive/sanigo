"use strict";

(function(){
  angular
    .module("comments")
    .factory("CommentFactory", ["$resource", CommentFactoryFunction])

 function CommentFactoryFunction($resource){
   return $resource("http://localhost:3000/locations/:location_id/comments/:id.json", {}, {
     update: { method: "PUT" }
   });
 }
}());
