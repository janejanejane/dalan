'use strict';

/**
 * @ngdoc directive
 * @name dalanApp.directive:main
 * @description
 * # main
 */
angular.module('dalanApp')
  .directive('main', function () {
    return {
      restrict: 'E',
      scope: {
        data: '=events'
      },
      link: function postLink(scope, element, attrs) {
        var chart = d3.select(element[0]);

        chart.append('svg')
                .attr('width', 200)
                .attr('height', 200)
                    .append('line')
                        .attr('x1', 5)
                        .attr('y1', 5)
                        .attr('x2', 5)
                        .attr('y2', 50)
                        .attr('stroke-width', 2)
                        .attr('stroke', 'black');
      },
      replace: false
    };
  });
