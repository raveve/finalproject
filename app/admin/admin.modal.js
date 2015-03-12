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
      // .when('/edit/:productid', {
      //   templateUrl: 'admin/views/edit.html',
      //   controller: 'AdminController as adminCtrl'
      // })
  });

})();
