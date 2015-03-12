(function () {
  "use strict";

  angular.module('peddlerApp', [
    'ngRoute',
    'portfoliosRoute',
    'adminRoute'
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
