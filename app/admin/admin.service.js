(function () {
  "use strict";

  angular.module('shampoodleApp')
    .factory('AdminService', function ($http, $rootScope) {

      var getGroomerProfiles = function () {
        return $http.get("api/collections/shampoodle");
      }

      var getGroomerProfile = function (id) {
        return $http.get("api/collections/shampoodle/" + id);
      }

      var addGroomerProfile = function (profile) {
        $http.post("api/collections/shampoodle", profile);
          $rootScope.$broadcast("groomer:added");
      }

      var deleteGroomerProfile = function(id) {
        $http.delete("api/collections/shampoodle/" + id);
          $rootScope.$broadcast("groomer:deleted");
      }

      var editGroomerProfile = function(profile) {
        $http.put("api/collections/shampoodle/" + profile._id, profile);
          $rootScope.$broadcast("groomer:updated");
      }

      var getGroomerCoords = function (profile) {
        var replacedStreet = profile.address.split(' ').join('+');
        var replacedCity = profile.city.split(' ').join('+');
        var replacedState = profile.state.split(' ').join('+');
        var address = replacedStreet + ',+' + replacedCity + ',+' + replacedState;
        var apiKey = '&key=AIzaSyDqBUTHZ3C99MSLqjplh2_4yC7V3z-XYc4'
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + apiKey;
        console.log(url);
        $http.get(url).success(function(dataset){
          console.log(dataset);
          var compGeo = dataset.results[0].geometry.location
          profile.coords = {};
          profile.coords.longitude = compGeo.lng;

          profile.coords.latitude = compGeo.lat;
          editGroomerProfile(profile, profile._id);
        });
      };

      return {
        getGroomers: getGroomerProfiles,
        getGroomer: getGroomerProfile,
        addGroomer: addGroomerProfile,
        deleteGroomer: deleteGroomerProfile,
        editGroomer: editGroomerProfile,
        getCoords: getGroomerCoords
      };
    });

})();
