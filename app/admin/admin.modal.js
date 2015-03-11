(function () {
  "use strict";

  angular.module('adminRoute', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin', {
        templateUrl: 'admin/views/admin.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/new', {
        templateUrl: 'admin/views/new.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/edit/:productid', {
        templateUrl: 'admin/views/edit.html',
        controller: 'AdminController as adminCtrl'
      })
  });

})();
