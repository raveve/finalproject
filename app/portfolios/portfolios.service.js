(function () {
  "use strict";

  angular.module('shampoodleApp')
    .factory('PortfoliosService', function ($http, $rootScope) {

      var search;

      var getGroomerProfiles = function () {
        return $http.get("api/collections/shampoodle");
      }

      var getGroomerProfile = function (id) {
        return $http.get("api/collections/shampoodle/" + id);
      }

      var addNewReview = function (review, ratingAvg, profile) {
        profile.reviews.push(review);
        profile.reviews.avgpaws(ratingAvg);
        $http.put("api/collections/shampoodle/" + profile._id, profile);
      }

      return {
        getGroomers: getGroomerProfiles,
        getGroomer: getGroomerProfile,
        addReview: addNewReview
      };
    });

})();
