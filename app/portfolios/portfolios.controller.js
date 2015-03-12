(function () {
  "use strict";
  angular.module('shampoodleApp')
    .controller('PortfoliosController', function (PortfoliosService, $scope, $location, $routeParams) {
        var portCtrl = this; // the scope of our controller is 'this'

        ProfilesService.getGroomers().success(function (profiles) {
          console.log(profiles);
          portCtrl.profiles = profiles;
        });

        ProfilesService.getGroomer($routeParams.profileid).then(function (response) {
         portCtrl.profile = response.data;
         console.log($routeParams.profileid);
        });

        portCtrl.reviews = ProfilesService.getReviews();

        portCtrl.go = function (index) {
          $location.path('/fullview/' + index);
        };

        portCtrl.buyItem = function (profile) {
          CartService.buyItem(profile);
        };

        portCtrl.addReview = function (newReview, profile) {
          ProfilesService.addReview(newReview, profile);
          $scope.newReview = {};
        };

    });

})();
