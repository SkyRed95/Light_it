$(document).ready(function () {
    var app2 = angular.module("Auth_App", []);
    app2.controller("AuthCtrl", function ($scope, $http) {
        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $scope.register = function () {
            var data = $.param({
                username: $scope.username,
                password: $scope.password
            });
            var regAPI = "http://smktesting.herokuapp.com/api/register/";
            $http.post(regAPI, data)
            $scope.authorization()
        }
        $scope.authorization = function () {
            var data = $.param({
                username: $scope.username,
                password: $scope.password
            });
            var authAPI = "http://smktesting.herokuapp.com/api/login/";
            $http.post(authAPI, data)
        }
    });
});