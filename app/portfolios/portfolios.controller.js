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

        });

        portCtrl.go = function (index) {
          $location.path('/fullview/' + index);
        };

        portCtrl.addReview = function (newReview, profile) {
          PortfoliosService.addReview(newReview, profile);

          portCtrl.profile = response.data;

          ratingAvg = _.reduce(profile.reviews, function(sum, review) {
          //  console.log('review ', review.rating);
           return sum += +(review.rating);
           }, 0) / portCtrl.profile.reviews.length;
          // ratingAvg = Math.round(portCtrl.ratingAvg);

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
