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
       });

        adminCtrl.addGroomer = function (newProfile) {
          AdminService.addGroomer({
            name:newProfile.name,
            email:newProfile.email,
            company:newProfile.company,
            companyURL:newProfile.companyURL,
            address:newProfile.address,
            city:newProfile.city,
            state:newProfile.state,
            zip:newProfile.zip,
            phone:newProfile.phone,
            mainimg:newProfile.mainimg,
            bio:newProfile.bio,
            portimg1:newProfile.portimg1,
            portimg2:newProfile.portimg2,
            portimg3:newProfile.portimg3,
            portimg4:newProfile.portimg4,
            portimg5:newProfile.portimg5,
            portimg6:newProfile.portimg6,
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
