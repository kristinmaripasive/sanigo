"use strict";

(function(){
  angular
    .module("comments")
    .factory("CommentFactory", ["$resource", CommentFactoryFunction])

 function CommentFactoryFunction($resource){
   return $resource("http://locahost:3000/locations/:location_id/comments/:id", {}, {
     update: { method: "PUT" }
   });
 }
}());
