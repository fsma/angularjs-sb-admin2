'use strict';
(function() {

    var dependencies = [

    ];
    define(dependencies, function() {
        var dashboardCtrl = function($scope, $rootScope, $http, $location, $log, MainFctry) {
            $log.info('dashboardCtrl working!');
            $scope.barchartdata = MainFctry.barchartdata();
            $scope.areachartdata = MainFctry.areachartdata();
            $scope.tabledata = MainFctry.dashboardtabledata();
        };
        return ['$scope', '$rootScope', '$http', '$location', '$log', 'main_fctry', dashboardCtrl];
    });

}());