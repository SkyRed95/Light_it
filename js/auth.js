$(document).ready(function () {
    var app = angular.module("AuthApp", []);
    app.controller("AuthCtrl", function ($scope, $http) {
        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        //$http.defaults.headers.common['Authorization'] = 'Token 416ec944e5095e3640ee55561fdf18eab9dbca87';
        $scope.register = function () {
            var data = $.param({
                username: $scope.username,
                password: $scope.password
            });
            var regAPI = "http://smktesting.herokuapp.com/api/register/";
            $http.post(regAPI, data)
                .success(function (data) {
                    $scope.answer = data;
                    if (data.success == "false") {
                        $scope.authorization()
                    }
                })
        }
        $scope.authorization = function () {
            var data = $.param({
                username: $scope.username,
                password: $scope.password
            });
            var authAPI = "http://smktesting.herokuapp.com/api/login/";
            $http.post(authAPI, data)
                .success(function (data) {
                    $scope.answer = data;
                })
        }
    });
});