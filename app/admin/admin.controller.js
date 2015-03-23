(function () {
  "use strict";
  angular.module('shampoodleApp')
    .controller('AdminController', function (AdminService, $scope, $location, $routeParams, uiGmapGoogleMapApi) {
        var adminCtrl = this;

        adminCtrl.login = function (userName, password) {
       if(userName === "raveve" & password === "password123") {
         $location.path('/adminlist');
       }
     };

        adminCtrl.profile = [];

        AdminService.getGroomers().success(function (profiles) {
          adminCtrl.profiles = profiles;
          console.log(adminCtrl.profiles);
          console.log(adminCtrl.profiles.length);
          for( var i = 0; i < adminCtrl.profiles.length; i++){
            console.log(adminCtrl.profiles[i]);
            AdminService.getCoords(adminCtrl.profiles[i]);
          }
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
            avgpaws: '0',
            approved: false,
            reviews: []
          });
          $scope.newProfile = {};
        };

        adminCtrl.approveGroomer = function (profile) {
          AdminService.approveGroomer(profile);
        }

        adminCtrl.deleteGroomer = function (id) {
          AdminService.deleteGroomer(id);
        };

        adminCtrl.editGroomer = function (profile) {
         AdminService.editGroomer(profile);
         $location.path('/adminlist');
       };

       uiGmapGoogleMapApi.then(function(maps) {

       });

       $scope.map = {
         center: {
           latitude: 32.82,
           longitude: -79.95
         },
           zoom: 12
       };

       adminCtrl.getNumber = function(num) {
         var convertedNum = Number(num);
         return new Array(convertedNum);
       };
    });

})();
