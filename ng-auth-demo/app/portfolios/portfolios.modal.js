(function () {
  "use strict";

  angular.module('portfoliosRoute', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'portfolios/views/main.html',
        controller: 'PortfoliosController as portCtrl'
      })
      .when('/portfolio/:portfolioid', {
        templateUrl: 'portfolios/views/portfolio.html',
        controller: 'PortfoliosController as portCtrl'
      })
      .when('/list', {
        templateUrl: 'portfolios/views/list.html',
        controller: 'PortfoliosController as portCtrl'
      })
      .when('/list/:term', {
        templateUrl: 'portfolios/views/list.html',
        controller: 'PortfoliosController as portCtrl'
      })
      .when ('/map', {
        templateUrl: 'portfolios/views/map.html',
        controller: 'PortfoliosController as portCtrl'
      })
  });

})();
