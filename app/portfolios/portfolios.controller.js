(function () {
  "use strict";
  angular.module('shampoodleApp')
    .controller('PortfoliosController', function (PortfoliosService, $scope, $location, $routeParams) {
        var portCtrl = this; // the scope of our controller is 'this'

        PortfoliosService.getGroomers().success(function (profiles) {
          portCtrl.profiles = profiles;
        });

        PortfoliosService.getGroomer($routeParams.portfolioid).then(function (response) {
          console.log(response);
         portCtrl.profile = response.data;
        });

        portCtrl.reviews = PortfoliosService.getReviews();

        portCtrl.go = function (index) {
          $location.path('/fullview/' + index);
        };

        portCtrl.addReview = function (newReview, profile) {
          PortfoliosService.addReview(newReview, profile);
          $scope.newReview = {};
        };

    });

//   $('.variable-width').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   centerMode: true,
//   variableWidth: true
// });

})();
