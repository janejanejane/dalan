'use strict';

/**
 * @ngdoc function
 * @name dalanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dalanApp
 */
angular.module('dalanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
