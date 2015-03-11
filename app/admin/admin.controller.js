(function () {
  "use strict";
  angular.module('peddlerApp')
    .controller('AdminController', function (AdminService, $scope, $location, $routeParams) {
        var adminCtrl = this;

        adminCtrl.product = [];

        AdminService.getProducts().success(function (products) {
          adminCtrl.products = products;
        });

        AdminService.getProduct($routeParams.productid).then(function (response) {
         adminCtrl.product = response.data;
         console.log($routeParams.productid);
       });

        adminCtrl.addProduct = function (newProduct) {
          AdminService.addProduct({
            name:newProduct.name,
            url:newProduct.url,
            details:newProduct.details,
            price:newProduct.price,
            reviews: []
          });
          $scope.newProduct = {};
        };

        adminCtrl.deleteProduct = function (id) {
          AdminService.deleteProduct(id);
        };

        adminCtrl.editProduct = function (product) {
         AdminService.editProduct(product);
         $location.path('/admin');
       };

    });

})();
