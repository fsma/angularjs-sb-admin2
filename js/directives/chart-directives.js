 'use strict';
 (function() {

     var dependencies = [
         'angular',
         'lib.jquery'
     ];

     define(dependencies, function(angular) {
         angular.element(document).ready(function() {
             return angular.module('ngmorris.chart', [])
                 .directive('barchart', ['$document', '$window',
                     function($window, $document) {

                         return {

                             // required to make it work as an element
                             restrict: 'E',
                             template: '<div></div>',
                             replace: true,
                             scope: '@',
                             // observe and manipulate the DOM
                             link: function($scope, element, attrs) {
                                 var obj, data, xkey, ykeys, labels, hideHover, resize, parseTime;
                                 if (attrs.obj) {


                                     obj = $scope[attrs.obj];
                                     data = obj.data;
                                     xkey = obj.xkey;
                                     ykeys = obj.ykeys;
                                     labels = obj.labels;
                                     hideHover = obj.hideHover;
                                     resize = obj.resize;
                                     parseTime = obj.parseTime;

                                 }

                                 console.log(obj);
                                 Morris.Bar({
                                     element: element,
                                     data: data,
                                     xkey: xkey,
                                     ykeys: ykeys,
                                     labels: labels,
                                     hideHover: hideHover,
                                     resize: resize,
                                     parseTime: parseTime
                                 });
                             }

                         };

                     }
                 ]).directive('areachart', ['$document', '$window',
                     function($window, $document) {

                         return {

                             // required to make it work as an element
                             restrict: 'E',
                             template: '<div></div>',
                             replace: true,
                             scope: '@',
                             // observe and manipulate the DOM
                             link: function($scope, element, attrs) {

                                 var obj, data, xkey, ykeys, labels, hideHover, resize, parseTime;
                                 if (attrs.obj) {


                                     obj = $scope[attrs.obj];
                                     data = obj.data;
                                     xkey = obj.xkey;
                                     ykeys = obj.ykeys;
                                     labels = obj.labels;
                                     hideHover = obj.hideHover;
                                     resize = obj.resize;
                                     parseTime = obj.parseTime;

                                 }
                                 console.log(obj);
                                 Morris.Area({
                                     element: element,
                                     data: data,
                                     xkey: xkey,
                                     ykeys: ykeys,
                                     labels: labels,
                                     hideHover: hideHover,
                                     resize: resize,
                                     parseTime: parseTime
                                 });
                             }

                         };

                     }
                 ]).directive('linechart', ['$document', '$window',
                     function($window, $document) {

                         return {

                             // required to make it work as an element
                             restrict: 'E',
                             template: '<div></div>',
                             replace: true,
                             scope: '@',
                             // observe and manipulate the DOM
                             link: function($scope, element, attrs) {

                                 var obj, data, xkey, ykeys, labels, hideHover, resize, parseTime;
                                 if (attrs.obj) {


                                     obj = $scope[attrs.obj];
                                     data = obj.data;
                                     xkey = obj.xkey;
                                     ykeys = obj.ykeys;
                                     labels = obj.labels;
                                     hideHover = obj.hideHover;
                                     resize = obj.resize;
                                     parseTime = obj.parseTime;

                                 }
                                 console.log(obj);
                                 Morris.Area({
                                     element: element,
                                     data: data,
                                     xkey: xkey,
                                     ykeys: ykeys,
                                     labels: labels,
                                     hideHover: hideHover,
                                     resize: resize,
                                     parseTime: parseTime
                                 });
                             }

                         };

                     }
                 ]).directive('donutchart', ['$document', '$window',
                     function($window, $document) {

                         return {

                             // required to make it work as an element
                             restrict: 'E',
                             template: '<div></div>',
                             replace: true,
                             scope: '@',
                             // observe and manipulate the DOM
                             link: function($scope, element, attrs) {

                                 var obj, data, xkey, ykeys, labels, hideHover, resize, parseTime;
                                 if (attrs.obj) {


                                     obj = $scope[attrs.obj];
                                     data = obj.data;
                                     xkey = obj.xkey;
                                     ykeys = obj.ykeys;
                                     labels = obj.labels;
                                     hideHover = obj.hideHover;
                                     resize = obj.resize;
                                     parseTime = obj.parseTime;

                                 }
                                 console.log(obj);
                                 Morris.Donut({
                                     element: element,
                                     data: data,
                                     xkey: xkey,
                                     ykeys: ykeys,
                                     labels: labels,
                                     hideHover: hideHover,
                                     resize: resize,
                                     parseTime: parseTime
                                 });
                             }

                         };

                     }
                 ]);
         });
     });
 }());