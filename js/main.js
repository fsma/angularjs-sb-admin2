requirejs.config({
    paths: {
        /*jquery: 'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min'*/

        'angular': '../lib/angularjs/angular.min',
        'lib.angular.i18n.tr': '../lib/angularjs/i18n/angular-locale_tr-tr',
        'lib.angular.route': '../lib/angularjs/angular-route.min',
        'lib.angular.resource': '../lib/angularjs/angular-resource.min',
        'lib.angular.sanitize': '../lib/angularjs/angular-sanitize.min',
        'lib.angular.animate': '../lib/angularjs/angular-animate.min',
        'lib.jquery': '../lib/jq/jquery.min',
        'lib.morrisjs': '../lib/morrisjs/morris',
        'lib.raphael': '../lib/raphael/raphael-min',
        'lib.jq_flot_excanvas': '../lib/flot/excanvas',
        'lib.jq_flot': '../lib/flot/jquery.flot',
        'lib.jq_flot_pie': '../lib/flot/jquery.flot.pie',
        'lib.jq_flot_time': '../lib/flot/jquery.flot.time',
        'lib.jq_flot_resize': '../lib/flot/jquery.flot.resize',
        'lib.jq_flot_tooltip': '../lib/flot.tooltip/js/jquery.flot.tooltip.min',
        'bootstrap': '../lib/bootstrap/ui-bootstrap-tpls-0.12.1',
        'ui_chart': '../lib/bootstrap/chart',
        'myModule': 'mainModul',
        'main_ctrl': 'mainCtrl',
        'main_fctry': 'mainFctry',
        'fsm_accordion': 'modules/fsm-accordion',
        'dashboard_ctrl': 'controllers/dashboardCtrl',
        'chart_modul': 'directives/chart-directives',
        'morrispage_ctrl': 'controllers/morrisPageCtrl',
        'flotpage_ctrl': 'controllers/flotPageCtrl',



    },
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['lib.jquery']
        },
        'bootstrap': {
            exports: 'angular',
            deps: ['angular']
        },
        'lib.angular.i18n.tr': ['angular'],
        'lib.angular.route': ['angular'],
        'lib.angular.resource': ['angular'],
        'lib.angular.sanitize': ['angular'],
        'lib.angular.animate': ['angular'],
        'lib.morrisjs': {
            exports: 'raphael',
            deps: ['lib.jquery', 'chart_modul']
        },
        'lib.raphael': {
            deps: ['lib.jquery']
        },

        'lib.jq_flot': {
            deps: ['lib.jquery']
        },
        'lib.jq_flot_pie': {
            deps: ['lib.jq_flot']
        },
        'lib.jq_flot_tooltip': {
            deps: ['lib.jq_flot']
        },
        'lib.jq_flot_time': {
            deps: ['lib.jq_flot']
        },
        'lib.jq_flot_resize': {
            deps: ['lib.jq_flot']
        },
        'lib.jq_flot_excanvas': {
            deps: ['lib.jq_flot']
        }

        /*'jquery.colorize': {
            deps: ['jquery'],
            exports: 'jQuery.fn.colorize'
        },
        'jquery.scroll': {
            deps: ['jquery'],
            exports: 'jQuery.fn.scroll'
        },
        'backbone.layoutmanager': {
            deps: ['backbone']
            exports: 'Backbone.LayoutManager'
        }*/
    }
});

require(['myModule'], function(app) {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['myModule']);
    });
});