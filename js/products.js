$(document).ready(function () {
    var productsAPI = "http://smktesting.herokuapp.com/api/products/?format=json";
    var app = angular.module("MyApp", []);
    app.controller("TitlesCtrl", function($scope, $http) {
        $http.get(productsAPI).
        success(function(data, title) {
            $scope.titles = data;
        })
    });
});