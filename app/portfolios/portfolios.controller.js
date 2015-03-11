(function () {
  "use strict";
  angular.module('peddlerApp')
    .controller('ProductsController', function (ProductsService, CartService, $scope, $location, $routeParams) {
        var prodCtrl = this; // the scope of our controller is 'this'

        ProductsService.getProducts().success(function (products) {
          console.log(products);
          prodCtrl.products = products;
        });

        ProductsService.getProduct($routeParams.productid).then(function (response) {
         prodCtrl.product = response.data;
         console.log($routeParams.productid);
        });

        prodCtrl.reviews = ProductsService.getReviews();

        prodCtrl.go = function (index) {
          $location.path('/fullview/' + index);
        };

        prodCtrl.buyItem = function (product) {
          CartService.buyItem(product);
        };

        prodCtrl.addReview = function (newReview, product) {
          ProductsService.addReview(newReview, product);
          $scope.newReview = {};
        };

    });

})();
