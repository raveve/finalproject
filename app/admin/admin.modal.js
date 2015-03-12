(function () {
  "use strict";

  angular.module('adminRoute', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newprofile', {
        templateUrl: 'app/admin/views/portfolio-setup.html'
        // controller: 'AdminController as adminCtrl'
      })
      .when('/edit/:productid', {
        templateUrl: 'app/admin/views/account-settings.html'
      //   controller: 'AdminController as adminCtrl'
      })
  });

})();
