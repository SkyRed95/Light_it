angular.module("AuthApp", [])
    .controller("AuthCtrl", function ($scope, $http) {
        $scope.register = function () {
            var data = $.param({
                username: $scope.username,
                password: $scope.password
            });
            var regAPI = "http://smktesting.herokuapp.com/api/register/";
            $http.post(regAPI, data)
                .success(function (data) {
                    $http.defaults.headers.common.Authorization = 'Token ' + data.token;
                    $scope.answer = data;
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
                    $http.defaults.headers.common.Authorization = 'Token ' + data.token;
                    $scope.answer = data;
                })
        }
    });