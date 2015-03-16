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
  'adminRoute',
  'uiGmapgoogle-maps'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/notfound', {
        templateUrl: '404.html'
      })
      .otherwise({
        redirectTo: '/notfound'
      });
  })
  
  .constant('_', _);

})();
