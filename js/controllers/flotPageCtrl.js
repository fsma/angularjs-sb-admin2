'use strict';
(function() {

    var dependencies = [

    ];
    define(dependencies, function() {
        var flotPageCtrl = function($window, $scope, $route, $rootScope, $http, $location, $log, $routeParams, MainFctry) {
            console.log("FloatPageCtrl working!");
            //Line Chart//////////////
            var offset = 0;
            var sin = [],
                cos = [];
            for (var i = 0; i < 12; i += 0.2) {
                sin.push([i, Math.sin(i + offset)]);
                cos.push([i, Math.cos(i + offset)]);
            }
            $scope.linedataset = [{
                data: sin,
                label: "sin(x)"
            }, {
                data: cos,
                label: "cos(x)"
            }];
            $scope.lineoptions = {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                grid: {
                    hoverable: true //IMPORTANT! this is needed for tooltip to work
                },
                yaxis: {
                    min: -1.2,
                    max: 1.2
                },
                tooltip: true,
                tooltipOpts: {
                    content: "'%s' of %x.1 is %y.4",
                    shifts: {
                        x: -60,
                        y: 25
                    }
                }
            };
            //Line Chart END !!//////////////
            //Pie Chart//////////////////////
            $scope.piedataset = [{
                label: "Series 0",
                data: 1
            }, {
                label: "Series 1",
                data: 3
            }, {
                label: "Series 2",
                data: 9
            }, {
                label: "Series 3",
                data: 20
            }];

            $scope.pieoptions = {
                series: {
                    pie: {
                        show: true
                    }
                },
                grid: {
                    hoverable: true
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
                    shifts: {
                        x: 20,
                        y: 0
                    },
                    defaultTheme: false
                }
            };

            //Pie Chart END!!/////////////////
            //Multi Axes Line Chart///////////

            var oilprices = MainFctry.oilPrices();
            var exchangerates = MainFctry.exchanGerates();
            var position = "right";

            function euroFormatter(v, axis) {
                return v.toFixed(axis.tickDecimals) + "€";
            }
            $scope.linemultidataset = [{
                data: oilprices,
                label: "Oil price ($)"
            }, {
                data: exchangerates,
                label: "USD/EUR exchange rate",
                yaxis: 2
            }];
            $scope.linemultioptions = {
                xaxes: [{
                    mode: 'time'
                }],
                yaxes: [{
                    min: 0
                }, {
                    // align if we are to the right
                    alignTicksWithAxis: position == "right" ? 1 : null,
                    position: position,
                    tickFormatter: euroFormatter
                }],
                legend: {
                    position: 'sw'
                },
                grid: {
                    hoverable: true //IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s for %x was %y",
                    xDateFormat: "%y-%0m-%0d",

                    onHover: function(flotItem, $tooltipEl) {
                        // console.log(flotItem, $tooltipEl);
                    }
                }

            };

            //Multi Axes Line Chart END!!/////
            //Bar Line Chart//////////////////

            $scope.bardataset = [{
                label: "bar",
                data: [
                    [1354521600000, 1000],
                    [1355040000000, 2000],
                    [1355223600000, 3000],
                    [1355306400000, 4000],
                    [1355487300000, 5000],
                    [1355571900000, 6000]
                ]
            }];


            $scope.baroptions = {
                series: {
                    bars: {
                        show: true,
                        barWidth: 43200000
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: "%m/%d",
                    minTickSize: [1, "day"]
                },
                grid: {
                    hoverable: true
                },
                legend: {
                    show: false
                },
                tooltip: true,
                tooltipOpts: {
                    content: "x: %x, y: %y"
                }
            };

            //Bar Line Chart END!!////////////
            //Moving Line////////////////////



            var data = [];

            function getRandomData() {

                if (data.length) {
                    data = data.slice(1);
                }

                while (data.length < 300) {
                    var previous = data.length ? data[data.length - 1] : 50;
                    var y = previous + Math.random() * 10 - 5;
                    data.push(y < 0 ? 0 : y > 100 ? 100 : y);
                }

                // zip the generated y values with the x values

                var res = [];
                for (var i = 0; i < data.length; ++i) {
                    res.push([i, data[i]])
                }

                return res;
            }

            //

            $scope.seriesdataset = [{
                data: getRandomData(),
                lines: {
                    fill: true
                }
            }];

            //
            $scope.seriesoptions = {
                grid: {
                    borderWidth: 1,
                    minBorderMargin: 20,
                    labelMargin: 10,
                    backgroundColor: {
                        colors: ["#fff", "#e4f4f4"]
                    },
                    margin: {
                        top: 8,
                        bottom: 20,
                        left: 20
                    },
                    markings: function(axes) {
                        var markings = [];
                        var xaxis = axes.xaxis;
                        for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 2) {
                            markings.push({
                                xaxis: {
                                    from: x,
                                    to: x + xaxis.tickSize
                                },
                                color: "rgba(232, 232, 255, 0.2)"
                            });
                        }
                        return markings;
                    }
                },
                xaxis: {
                    tickFormatter: function() {
                        return "";
                    }
                },
                yaxis: {
                    min: 0,
                    max: 110
                },
                legend: {
                    show: true
                }
            };
            // Update the random dataset at 25FPS for a smoothly-animating chart

            setInterval(function updateRandom() {
                //console.log($scope.seriesdataset[0].data);
                // thx for  Jakob Jenkov :)
                //http://tutorials.jenkov.com/angularjs/watch-digest-apply.html
                //
                $scope.$apply(function() {
                    $scope.seriesdataset[0].data = getRandomData();
                });

            }, 40);


        };
        return ['$window', '$scope', '$route', '$rootScope', '$http', '$location', '$log', '$routeParams', 'main_fctry', flotPageCtrl];
    });

}());