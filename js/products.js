$(document).ready(function () {
    var productsAPI = "http://smktesting.herokuapp.com/api/products/?format=json";
    var app = angular.module("MyApp", []);
    app.controller("TitlesCtrl", function($scope, $http) {
        $http.get(productsAPI).
        success(function(data) {
            $scope.titles = data;
            $scope.activeMenu = $scope.titles[0];
            $scope.setActive = function(titles) {
                $scope.activeMenu = titles
            }
        })
    });
});