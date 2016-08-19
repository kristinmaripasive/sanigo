"use strict";

(function(){
  angular
  .module("comments")
  .factory("CommentFactory", ["$resource", CommentFactoryFunction])

  function CommentFactoryFunction($resource){
    return $resource("https://sanigo.herokuapp.com/locations/:location_id/comments/:id.json", {}, {
      update: { method: "PUT" }
    });
  }
}());
