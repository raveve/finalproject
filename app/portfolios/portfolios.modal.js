(function () {
  "use strict";

  angular.module('portfoliosRoute', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/portfolios/views/main.html'
      })
      .when('/portfolio/:portfolioid', {
        templateUrl: 'app/portfolios/views/portfolio.html',
        controller: 'PortfoliosController as portCtrl'
      })
      .when('/list', {
        templateUrl: 'app/portfolios/views/list.html',
        controller: 'PortfoliosController as portCtrl'
      })
  });

})();
