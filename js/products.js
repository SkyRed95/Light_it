$(document).ready(function () {
    var productsAPI = "http://smktesting.herokuapp.com/api/products/?format=json";
    var app = angular.module("MyApp", ['ui.bootstrap']);
    app.controller("TitlesCtrl", function($scope, $http) {
        $http.get(productsAPI).
        success(function(data) {
            $scope.titles = data;
        })
        // $scope.active = function() {
        //     return $scope.titles.filter(function(titles){
        //         return titles.active;
        //     });
        // };
        $scope.id = function(idProduct) {
            var reviewsAPI = "http://smktesting.herokuapp.com/api/reviews/" + idProduct;
            $http.get(reviewsAPI).success(function (data) {
                $scope.reviews = data;
            })
        }
    });
});