(function () {
  "use strict";

angular.module('shampoodleApp', [
  'ngMessages',
  'ngRoute',
  'ngSanitize',
  'mgcrea.ngStrap',
  'auth',
  'profile',
  'posts',
  'portfoliosRoute',
  'adminRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/notfound', {
        templateUrl: '404.html'
      })
      .otherwise({
        redirectTo: '/notfound'
      });

  });

})();
