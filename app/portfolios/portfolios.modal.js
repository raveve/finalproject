(function () {
  "use strict";

  angular.module('portfoliosRoute', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/portfolios/views/main.html'
        // controller: 'ProductsController as prodCtrl'
      })
      // .when('/fullview/:productid', {
      //   templateUrl: 'products/views/fullview.html',
      //   controller: 'ProductsController as prodCtrl'
      // })
  });

})();
