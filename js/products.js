$(document).ready(function () {
    var productsAPI = "http://smktesting.herokuapp.com/api/products/?format=json";
    var app = angular.module("MyApp", ['ui.bootstrap']);
    app.controller("TitlesCtrl", function ($scope, $http) {
        $http.get(productsAPI).success(function (data) {
            $scope.titles = data;
        })
        // $scope.active = function() {
        //     return $scope.titles.filter(function(titles){
        //         return titles.active;
        //     });
        // };
        // $scope.select = function(ProductTitle) {
        //     angular.forEach($scope.titles, function(ProductTitle) {
        //         ProductTitle.selected = false;
        //     });
        //     ProductTitle.selected = true;
        // };
        $scope.id = function (idProduct) {
            var reviewsAPI = "http://smktesting.herokuapp.com/api/reviews/" + idProduct;
            $http.get(reviewsAPI).success(function (data) {
                $scope.reviews = data;
            })
        }
    });
    /*Change the tags "tabs" and "pane"*/
    angular.module("template/tabs/tabs.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/tabs/tabs.html",
            "<div class=\"tabbable\">" +
            "  <ul class=\"nav nav-tabs\">" +
            "    <li ng-repeat=\"pane in panes\" ng-class=\"{active:pane.selected}\">" +
            "      <a href=\"\" ng-click=\"select(pane)\">{{pane.heading}}</a>" +
            "    </li>" +
            "  </ul>" +
            "  <div class=\"tab-content\" ng-transclude></div>" +
            "</div>" +
            "");
    }]);
});