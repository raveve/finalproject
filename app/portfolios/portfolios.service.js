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

      var addNewReview = function (review, profile) {
        profile.reviews.push(review);
        profile.avgpaws = ratingAvg(profile);
        console.log(profile.avgpaws);
        $http.put("api/collections/shampoodle/" + profile._id, profile);
      }

      var ratingAvg = function(profile) {
        var averagePaws = _.reduce(profile.reviews, function(sum, review) {
           return sum += +(review.rating);
         }, 0) / profile.reviews.length;
         averagePaws = Math.round(averagePaws);
         console.log("from ratingAVG" + averagePaws);
         return averagePaws;
      }

      return {
        getGroomers: getGroomerProfiles,
        getGroomer: getGroomerProfile,
        addReview: addNewReview,
        ratingAvg: ratingAvg
      };
    });

})();
