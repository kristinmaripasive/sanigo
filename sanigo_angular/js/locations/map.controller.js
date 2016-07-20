"use strict";

(function(){
  angular
    .module("locations")
    .controller("MapIndexController", ["LocationFactory", MapIndexControllerFunction])


    function MapIndexControllerFunction(LocationFactory){
      // this.locations = LocationFactory.query()
      var vm = this;






      vm.initMap = function() {
        var latlng = new google.maps.LatLng(38.904864, -77.033996);
        var myOptions = {
          zoom: 18,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);

        LocationFactory.query().$promise.then(function(locations){
          console.log(locations)

          locations.forEach(function(location){
            var image = 'http://i.imgur.com/MuAdxDX.png';
            var markerLatLng = new google.maps.LatLng(location.latitude, location.longitude)
            var marker = new google.maps.Marker({
              position: markerLatLng,
              icon: image

            });
            marker.setMap(map);
          });
        });

    // To add the marker to the map, call setMap();

    }



  }




})();
