angular.module("AuthApp", [])
    .factory('AuthFact', function($http, $q) {
        return {
            post: function (API, data) {
                var deferred = $q.defer();
                $http.post(API, data)
                    .success(deferred.resolve)
                    .error(deferred.resolve);
                return deferred.promise;
            }
        }
    })
    .controller("AuthCtrl", function ($scope, $http, AuthFact) {
        $scope.register = function () {
            var data = $.param({
                username: $scope.username,
                password: $scope.password
            });
            var regAPI = "//smktesting.herokuapp.com/api/register/";
            AuthFact.post(regAPI, data)
                .then(function (data) {
                    $http.defaults.headers.common.Authorization = 'Token ' + data.token;
                    $scope.answer = data;
                })
        }
        $scope.authorization = function () {
            var data = $.param({
                username: $scope.username,
                password: $scope.password
            });
            var authAPI = "//smktesting.herokuapp.com/api/login/";
            AuthFact.post(authAPI, data)
                .then(function (data) {
                    $http.defaults.headers.common.Authorization = 'Token ' + data.token;
                    $scope.answer = data;
                })
        }
    });