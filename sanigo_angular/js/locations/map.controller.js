"use strict";

(function(){
  angular
  .module("locations")
  .controller("MapIndexController", ["LocationFactory", "$state", "$stateParams", MapIndexControllerFunction])

  var redirectShow;
  function MapIndexControllerFunction(LocationFactory, $state, $stateParams){
    // this.locations = LocationFactory.query()
    var vm = this;
    var marker;
    vm.initMap = function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        (position.coords.latitude, position.coords.longitude);

      var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
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

          var infowindow = new google.maps.InfoWindow({
            content: "<a href='/sanigo/sanigo_angular/#/locations/" + location.id + "'>" + location.name + "</a>"
          });

          var marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: markerLatLng,
            icon: image,
            title: "<a data-ui-sref='locationShow({id:" + location.id + "})'>" + location.name + "</a>"
          });
          // To add the marker to the map, call setMap();
          marker.setMap(map);
          // marker.addListener('click', redirectShow);
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });

        });
      });
    });
    }
  }

})();
