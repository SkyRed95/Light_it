$(document).ready(function () {
    var productsAPI = "http://smktesting.herokuapp.com/api/products/?format=json";
    var app = angular.module("ProdApp", ["AuthApp"]);
    app.controller("TitlesCtrl", function ($scope, $http) {
        $http.get(productsAPI).success(function (data) {
            $scope.titles = data;
        })
        $scope.id = function id(idProduct) {
            var reviewsAPI = "http://smktesting.herokuapp.com/api/reviews/" + idProduct;
            $http.get(reviewsAPI).success(function (data) {
                $scope.reviews = data;
            })
        }
        $scope.setActive = function(titles) {
            $scope.activeMenu = titles
        }
    });

});