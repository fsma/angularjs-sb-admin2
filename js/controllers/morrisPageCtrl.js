'use strict';
(function() {

    var dependencies = [

    ];
    define(dependencies, function() {
        var morrisPageCtrl = function($scope, $rootScope, $http, $location, $log, MainFctry) {
            $log.info('morrisPageCtrl working!');
            $scope.barchartdata = MainFctry.barchartdata();
            $scope.areachartdata = MainFctry.areachartdata();
            $scope.linechartdata = MainFctry.linechartdata();
            $scope.donutchartdata = MainFctry.donutchartdata();


        };
        return ['$scope', '$rootScope', '$http', '$location', '$log', 'main_fctry', morrisPageCtrl];
    });

}());