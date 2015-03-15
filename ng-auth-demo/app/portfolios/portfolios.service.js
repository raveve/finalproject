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
        $http.put(url + "/" + profile._id, profile);
      }

      var getGroomerReviews = function (reviews) {
        return $http.get(reviews);
        var value = review.rating;
        if (value === 1) {
          return '<i class="fa fa-paw"></i>';
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
      }

      return {
        getGroomers: getGroomerProfiles,
        getGroomer: getGroomerProfile,
        addReview: addNewReview,
        getReviews: getGroomerReviews
      };
    });

})();
