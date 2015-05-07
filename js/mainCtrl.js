'use strict';
(function() {

    var dependencies = [

    ];
    define(dependencies, function() {
        var MainCtrl = function($window, $scope, $route, $rootScope, $http, $location, $log, $routeParams, MainFctry) {
            console.log("mainCtrl working");

            $scope.menu = MainFctry.menu();

        };
        return ['$window', '$scope', '$route', '$rootScope', '$http', '$location', '$log', '$routeParams', 'main_fctry', MainCtrl];
    });

}());