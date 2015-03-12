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
      .when('/portfolio', {
        templateUrl: 'app/portfolios/views/portfolio.html'
        // controller: 'ProductsController as prodCtrl' add to end of url extension /:productid
      })
      .when('/list', {
        templateUrl: 'app/portfolios/views/list.html'
      })
  });

})();
