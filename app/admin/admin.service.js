(function () {
  "use strict";

  angular.module('shampoodleApp')
    .factory('AdminService', function ($http, $rootScope) {

      var url = "http://tiy-fee-rest.herokuapp.com/collections/shampoodleApp";

      var getGroomerProfiles = function () {
        return $http.get(url);
      }

      var getGroomerProfile = function (id) {
        return $http.get(url + '/' + id);
      }

      var addGroomerProfile = function (profile) {
        $http.post(url, profile);
      }

      var deleteGroomerProfile = function(id) {
        $http.delete(url + '/' + id);
      }

      var editGroomerProfile = function(profile) {
        $http.put(url + '/' + profile._id, profile);
      }

      var getGroomerCoords = function (company) {
        var replacedStreet = profile.address.split(' ').join('+');
        var replacedCity = profile.city.split(' ').join('+');
        var replacedState = profile.state.split(' ').join('+');
        var address = replacedStreet + ',+' + replacedCity + ',+' + replacedState;
        var apiKey = '&key=AIzaSyDqBUTHZ3C99MSLqjplh2_4yC7V3z-XYc4'
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + apiKey;

        $http.get(url).success(function(dataset){
          console.log(dataset);
          var compGeo = dataset.results[0].geometry.location
          groomer.coords = {};
          groomer.coords.longitude = compGeo.lng;

          groomer.coords.latitude = compGeo.lat;
          editGroomerProfile(profile, profile._id);
        });
      };

      return {
        getGroomers: getGroomerProfiles,
        getGroomer: getGroomerProfile,
        addGroomer: addGroomerProfile,
        deleteGroomer: deleteGroomerProfile,
        editGroomer: editGroomerProfile,
        getCoords: getGroomerCoords,
      };
    });

})();
