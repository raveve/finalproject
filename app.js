(function () {
  "use strict";

  angular.module('peddlerApp', [
    'ngRoute',
    'portfoliosRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/notfound', {
        templateUrl: '404.html'
      })
      .otherwise({
        redirectTo: '/notfound'
      });
  });

})();
