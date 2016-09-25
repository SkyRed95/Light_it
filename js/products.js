$(document).ready(function () {
    var productsAPI = "http://smktesting.herokuapp.com/api/products/?format=json";
    var app = angular.module("MyApp", ['ui.bootstrap']);
    app.controller("TitlesCtrl", function ($scope, $http) {
        $http.get(productsAPI).success(function (data) {
            $scope.titles = data;
        })
        $scope.id = function id(idProduct) {
            var reviewsAPI = "http://smktesting.herokuapp.com/api/reviews/" + idProduct;
            $http.get(reviewsAPI).success(function (data) {
                $scope.reviews = data;
            })
        }
    });
    angular.module("template/tabs/tabs.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/tabs/tabs.html",
            "<div class=\"tabbable\">" +
            "  <ul class=\"nav nav-tabs\">" +
            "    <li ng-repeat=\"pane in panes\" ng-class=\"{active:pane.selected}\"ng-click=\"test()\">" +
            "      <a ng-click=\"select(pane)\">{{pane.heading}}</a>" +
            "    </li>" +
            "    <li class=\"sign\">" +
            "      <a onclick=\"location.href='login_form.html'\">Sign</a>" +
            "    </li>" +
            "  </ul>" +
            "  <div class=\"tab-content\" ng-transclude></div>" +
            "</div>" +
            "");
    }]);
});