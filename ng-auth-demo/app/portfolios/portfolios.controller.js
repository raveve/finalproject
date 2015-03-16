(function () {
  "use strict";
  angular.module('shampoodleApp')
    .controller('PortfoliosController', function (PortfoliosService, $scope, $location, $routeParams, $filter, uiGmapGoogleMapApi) {
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

        uiGmapGoogleMapApi.then(function(maps) {

        });

        $scope.map = {
          center: {
            latitude: 32.79,
            longitude: -79.95
          },
            zoom: 12
        };

        // .config(function(uiGmapGoogleMapApiProvider) {
        //   uiGmapGoogleMapApiProvider.configure({
        //       key: 'AIzaSyDqBUTHZ3C99MSLqjplh2_4yC7V3z-XYc4',
        //       v: '3.17',
        //       libraries: 'weather,geometry,visualization'
        //   });
        // })

    });

})();
