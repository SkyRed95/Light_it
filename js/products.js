$(document).ready(function () {
    var productsAPI = "http://smktesting.herokuapp.com/api/products/?format=json";
    var app = angular.module("MyApp", []);
    app.controller("TitlesCtrl", function($scope, $http) {
        $http.get(productsAPI).
        success(function(data, title) {
            $scope.titles = data;
        })
    });

    app.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.navClass = function (page) {
            var currentRoute = $location.path().substring(1);
            return page === currentRoute ? 'active' : '';
        };
    }]);
});