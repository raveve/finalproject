(function () {
  "use strict";

  angular.module('shampoodleApp')
    .factory('PortfoliosService', function ($http, $rootScope) {

      var search;

      var url = "http://tiy-fee-rest.herokuapp.com/collections/shampoodleApp";

      var getGroomerProfiles = function () {
        return $http.get(url);
      }

      var getGroomerProfile = function (id) {
        return $http.get(url + '/' + id);
      }

      var addNewReview = function (review, profile) {
        profile.reviews.push(review);
        var value = review;
        console.log(profile.pawRating);
        if (value === 1) {
          profile.pawRating.push('<i class="fa fa-paw"></i>');
        }
        else if (value === 2) {
          return '<i class="fa fa-paw"></i><i class="fa fa-paw"></i>';
        }
        else if (value === 3) {
          return '<i class="fa fa-paw"></i><i class="fa fa-paw"></i><i class="fa fa-paw"></i>';
        }
        else if (value === 4) {
          return '<i class="fa fa-paw"></i><i class="fa fa-paw"></i><i class="fa fa-paw"></i><i class="fa fa-paw"></i>';
        }
        else if (value === 5) {
          return '<i class="fa fa-paw"></i><i class="fa fa-paw"></i><i class="fa fa-paw"></i><i class="fa fa-paw"></i><i class="fa fa-paw"></i>';
        }

        $http.put(url + "/" + profile._id, profile);
      }

      var getGroomerReviews = function (reviews) {

      }
      //
      // var paws = 5;
      //
      // for (i=0; i<=paws; i++) {
      //   return '<i class=>'
      // }

      return {
        getGroomers: getGroomerProfiles,
        getGroomer: getGroomerProfile,
        addReview: addNewReview,
        getReviews: getGroomerReviews
      };
    });

})();
