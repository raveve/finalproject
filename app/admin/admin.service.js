(function () {
  "use strict";

  angular.module('peddlerApp')
    .factory('AdminService', function ($http, $rootScope) {

      var url = "http://tiy-fee-rest.herokuapp.com/collections/peddlerapp";

      var getBikeProducts = function () {
        return $http.get(url);
      }

      var getBikeProduct = function (id) {
        return $http.get(url + '/' + id);
      }

      var addBikeProduct = function (product) {
        $http.post(url, product);
      }

      var deleteBikeProduct = function(id) {
        $http.delete(url + '/' + id);
      }

      var editBikeProduct = function(product) {
        $http.put(url + '/' + product._id, product);
      }

      return {
        getProducts: getBikeProducts,
        getProduct: getBikeProduct,
        addProduct: addBikeProduct,
        deleteProduct: deleteBikeProduct,
        editProduct: editBikeProduct
      };
    });

})();
