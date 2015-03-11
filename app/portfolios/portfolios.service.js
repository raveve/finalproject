(function () {
  "use strict";

  angular.module('peddlerApp')
    .factory('ProductsService', function ($http, $rootScope) {

      var url = "http://tiy-fee-rest.herokuapp.com/collections/peddlerapp";

      var getBikeProducts = function () {
        return $http.get(url);
      }

      var getBikeProduct = function (id) {
        return $http.get(url + '/' + id);
      }

      var addNewReview = function (review, product) {
        // product.reviews = array
        // review = object
        product.reviews.push(review);
        $http.put(url + "/" + product._id, product);
      }

      var getBikeReviews = function (reviews) {
        return $http.get(reviews);
      }

      return {
        getProducts: getBikeProducts,
        getProduct: getBikeProduct,
        addReview: addNewReview,
        getReviews: getBikeReviews
      };
    });

})();
