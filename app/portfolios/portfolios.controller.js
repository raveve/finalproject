(function () {
  "use strict";
  angular.module('shampoodleApp')
    .controller('PortfoliosController', function (PortfoliosService, $scope, $location, $routeParams, $filter, _) {
        var portCtrl = this; // the scope of our controller is 'this'

        $scope.searchTerm = $routeParams.term;

        PortfoliosService.getGroomers().success(function (profiles) {
          portCtrl.profiles = profiles;
        });

        PortfoliosService.getGroomer($routeParams.portfolioid).then(function (response) {
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

        portCtrl.homeSearch = function (searchTerm) {
          $location.path('/list/' + searchTerm);
        };

        portCtrl.getNumber = function(num) {
          var convertedNum = Number(num);
          return new Array(convertedNum);
        };

        // ratings = [_.each(review.rating) +];
        //
        // portCtrl.mean = _.reduce(ratings, function(sum, review) {
        //   sum + review.rating
        // }, 0) / reviews.length

    });

})();
