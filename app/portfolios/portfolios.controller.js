(function () {
  "use strict";
  angular.module('shampoodleApp')
    .controller('PortfoliosController', function (PortfoliosService, $scope, $location, $routeParams, $filter, _) {
        var portCtrl = this;

        $scope.searchTerm = $routeParams.term;

        PortfoliosService.getGroomers().success(function (profiles) {
          portCtrl.profiles = profiles;
        });

        PortfoliosService.getGroomer($routeParams.portfolioid).then(function (response) {
         portCtrl.profile = response.data;
         portCtrl.ratingAvg = PortfoliosService.ratingAvg(portCtrl.profile);
         console.log(portCtrl.profile.avgpaws);
        });

        portCtrl.go = function (index) {
          $location.path('/fullview/' + index);
        };

        $scope.newReview = { date: new Date() };

        portCtrl.addReview = function (newReview, profile) {
          PortfoliosService.addReview(newReview, profile);
          $scope.newReview = {};
        };

        portCtrl.homeSearch = function (searchTerm) {
          $location.path('/list/' + searchTerm);
        };

        portCtrl.getNumber = function(num) {
          var convertedNum = Number(num);
          return new Array(convertedNum);
        };

    });

})();
