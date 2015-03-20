(function () {
  "use strict";

  angular.module('adminRoute', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newprofile', {
        templateUrl: 'admin/views/portfolio-setup.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/admin', {
        templateUrl: 'admin/views/admin.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/adminlist', {
        templateUrl: 'admin/views/admin-list.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/edit/:profileid', {
        templateUrl: 'admin/views/account-settings.html',
        controller: 'AdminController as adminCtrl'
      })
  });

})();
