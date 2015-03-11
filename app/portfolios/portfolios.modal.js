(function () {
  "use strict";

  angular.module('productRoute', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/products', {
        templateUrl: 'products/views/products.html',
        controller: 'ProductsController as prodCtrl'
      })
      .when('/fullview/:productid', {
        templateUrl: 'products/views/fullview.html',
        controller: 'ProductsController as prodCtrl'
      })
  });

})();
