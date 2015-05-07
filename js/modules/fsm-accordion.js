 'use strict';
 (function() {

     var dependencies = [
         'angular',
         'lib.jquery'
     ];

     define(dependencies, function(angular) {
         angular.element(document).ready(function() {
             return angular.module('fsmAccordion', [])
                 .directive('fsmMenu', ['$document', '$window',
                     function($window, $document) {
                         return {
                             restrict: 'EAC',
                             scope: "@",
                             link: function(scope, element, attr) {
                                 element.on('click', function(e) {
                                     var liElementId = e.target.closest('li').id;
                                     for (var i = 0; i < $('#' + liElementId).parent().children().length; i++) {
                                         if (attr.subData == "true") {
                                             e.preventDefault();
                                         }
                                         if ($($('#' + liElementId).parent().children()[i]).hasClass("active")) {
                                             $($($('#' + liElementId).parent().children()[i]).children()[1]).slideUp("slow", function(e) {
                                                 $(this).parent().removeClass('active');
                                             });
                                         }
                                     }
                                     if ($('#' + liElementId + " ul").css("display") == "none") {
                                         if (attr.subData == "true") {
                                             e.preventDefault();
                                         }
                                         $('#' + liElementId).addClass('active');
                                         $('#' + liElementId + ">ul").slideDown("slow", function(e) {

                                             $('html, body').animate({
                                                 scrollTop: ($('#' + liElementId).offset().top)
                                             }, 200);
                                         });
                                     }
                                 });
                             }
                         };
                     }
                 ]);
         });
     });
 }());