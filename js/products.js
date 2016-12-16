angular.module("ProdApp", ["AuthApp", 'ngRateIt'])
    .factory('ProdFact', function($http, $q) {
        return {
            get: function(API) {
                var deferred = $q.defer();
                $http.get(API)
                    .success(deferred.resolve)
                    .error(deferred.resolve);
                return deferred.promise;
            },
            post: function (API, data) {
                var deferred = $q.defer();
                $http.post(API, data)
                    .success(deferred.resolve)
                    .error(deferred.resolve);
                return deferred.promise;
            }
        }
    })
    .controller("TitlesCtrl", function ($scope, $http, ProdFact) {
        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        var productsAPI = "//smktesting.herokuapp.com/api/products/?format=json"
        ProdFact.get(productsAPI)
            .then(function (data) {
                $scope.titles = data;
            })
        $scope.id = function id(idProduct) {
            var reviewsAPI = "//smktesting.herokuapp.com/api/reviews/" + idProduct;
            ProdFact.get(reviewsAPI)
                .then(function (data) {
                    $scope.reviews = data;
                })
        }
        $scope.setActive = function (titles) {
            $scope.activeMenu = titles
        }
        $scope.postReview = function (idProduct, text_review, rate_review) {
            var data = $.param({
                rate: rate_review,
                text: text_review
            });
            var reviewAPI = "//smktesting.herokuapp.com/api/reviews/" + idProduct;
            ProdFact.post(reviewAPI, data)
                .then(function () {
                    var reviewsAPI = "//smktesting.herokuapp.com/api/reviews/" + idProduct;
                    ProdFact.get(reviewsAPI)
                        .then(function (data) {
                        $scope.reviews = data;
                    })
                })
        }
    });