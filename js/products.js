angular.module("ProdApp", ["AuthApp", 'ngRateIt'])
    .controller("TitlesCtrl", function ($scope, $http) {
        var productsAPI = "http://smktesting.herokuapp.com/api/products/?format=json"
        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $http.get(productsAPI)
            .success(function (data) {
                $scope.titles = data;
            })
        $scope.id = function id(idProduct) {
            var reviewsAPI = "http://smktesting.herokuapp.com/api/reviews/" + idProduct;
            $http.get(reviewsAPI)
                .success(function (data) {
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
            var reviewAPI = "http://smktesting.herokuapp.com/api/reviews/" + idProduct;
            $http.post(reviewAPI, data)
                .success(function () {
                    var reviewsAPI = "http://smktesting.herokuapp.com/api/reviews/" + idProduct;
                    $http.get(reviewsAPI).success(function (data) {
                        $scope.reviews = data;
                    })
                })
        }
    });