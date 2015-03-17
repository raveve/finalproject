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

         portCtrl.ratingSum = _.reduce(portCtrl.profile.reviews, function(sum, review) {
           console.log('review ', review.rating);
             return sum += Number(review.rating);
           }, 0) / portCtrl.profile.reviews.length
          //  console.log(portCtrl.ratingSum/portCtrl.profile.reviews.length);

          console.log(portCtrl.ratingSum)

        });

        // var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);

//         mean = _.reduce(pixels, function(sum, pixel) {
//   sum + pixel.red
// }, 0) / pixels.length

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

    });

})();
