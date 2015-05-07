 'use strict';
 (function() {

     var dependencies = [
         'angular',
         'bootstrap',
         'lib.angular.route',
         'fsm_accordion',
         'chart_modul',
         'ui_chart',
         'main_ctrl',
         'main_fctry',
         'dashboard_ctrl',
         'flotpage_ctrl',
         'morrispage_ctrl',
         'lib.morrisjs',
         'lib.raphael',
         'lib.jq_flot',
         'lib.jq_flot_excanvas',
         'lib.jq_flot_pie',
         'lib.jq_flot_tooltip',
         'lib.jq_flot_time',
         'lib.jq_flot_resize'




     ];

     define(dependencies, function(angular, ngroute, bootstrap, fsm_accordion, chart_modul, ui_chart, MainCtrl, MainFctry, dashboardCtrl, flotPageCtrl, morrisPageCtrl) {
         angular.element(document).ready(function() {
             return angular.module('myModule', ['ngRoute', 'ui.bootstrap', 'fsmAccordion', 'ngmorris.chart', 'ngflot.chart'])
                 .controller('main_ctrl', MainCtrl)
                 .factory('main_fctry', MainFctry)
                 .controller('dashboard_ctrl', dashboardCtrl)
                 .controller('morrispage_ctrl', morrisPageCtrl)
                 .controller('flotpage_ctrl', flotPageCtrl)
                 .config(['$routeProvider', '$locationProvider',
                     function($routeProvider, $locationProvider) {
                         var path = window.location.origin + '' + window.location.pathname;
                         console.log(window.location.origin, window.location.pathname);
                         ///$locationProvider.html5Mode(true);
                         $routeProvider.when('/dashboard', {
                             templateUrl: path + 'pages/dashboard.html',
                             controller: dashboardCtrl
                         }).when('/flot', {
                             templateUrl: path + 'pages/flot.html',
                             controller: flotPageCtrl
                         }).when('/morris', {
                             templateUrl: path + 'pages/morris.html',
                             controller: morrisPageCtrl
                         }).when('/tables', {
                             templateUrl: path + 'pages/tables.html',
                         }).when('/forms', {
                             templateUrl: path + 'pages/forms.html',
                         }).when('/typography', {
                             templateUrl: path + 'pages/typography.html',
                         }).when('/panels-wells', {
                             templateUrl: path + 'pages/panels-wells.html',
                         }).when('/buttons', {
                             templateUrl: path + 'pages/buttons.html',
                         }).when('/notifications', {
                             templateUrl: path + 'pages/notifications.html',
                         }).when('/icons', {
                             templateUrl: path + 'pages/icons.html',
                         }).when('/grid', {
                             templateUrl: path + 'pages/grid.html',
                         }).when('/blank', {
                             templateUrl: path + 'pages/blank.html',
                         }).otherwise({
                             redirectTo: '/dashboard'
                         });
                     }
                 ]);
         });
     });

 }());