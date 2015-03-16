(function () {
  "use strict";

  angular.module('shampoodleApp')
    .factory('PortfoliosService', function ($http, $rootScope) {

      var search;

      // var url = "http://tiy-fee-rest.herokuapp.com/collections/shampoodleApp";

      var getGroomerProfiles = function () {
        return $http.get("api/collections/shampoodle");
      }

      var getGroomerProfile = function (id) {
        return $http.get("api/collections/shampoodle" + '/' + id);
      }

      var addNewReview = function (review, profile) {
        $http.put("api/collections/shampoodle" + "/" + profile._id, profile);
      }

      var getGroomerReviews = function (reviews) {
        $http.get("api/collections/shampoodle" + "/" + )
      }

      return {
        getGroomers: getGroomerProfiles,
        getGroomer: getGroomerProfile,
        addReview: addNewReview,
        getReviews: getGroomerReviews
      };
    });

})();
