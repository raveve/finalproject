(function () {
  "use strict";
  angular.module('shampoodleApp')
    .controller('AdminController', function (AdminService, $scope, $location, $routeParams) {
        var adminCtrl = this;

        adminCtrl.profile = [];

        AdminService.getGroomers().success(function (profiles) {
          adminCtrl.profiles = profiles;
        });

        AdminService.getGroomer($routeParams.profileid).then(function (response) {
         adminCtrl.profile = response.data;
         console.log($routeParams.profileid);
       });

        adminCtrl.addProfile = function (newProfile) {
          AdminService.addProfile({
            name:newProfile.name,
            url:newProfile.url,
            details:newProfile.details,
            price:newProfile.price,
            reviews: []
          });
          $scope.newProfile = {};
        };

        adminCtrl.deleteGroomer = function (id) {
          AdminService.deleteGroomer(id);
        };

        adminCtrl.editGroomer = function (profile) {
         AdminService.editGroomer(profile);
         $location.path('/admin');
       };

    });

})();
