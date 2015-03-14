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

      return {
        getGroomers: getGroomerProfiles,
        getGroomer: getGroomerProfile,
        addGroomer: addGroomerProfile,
        deleteGroomer: deleteGroomerProfile,
        editGroomer: editGroomerProfile
      };
    });

})();
