'use strict';

/**
 * @ngdoc function
 * @name dalanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dalanApp
 */
angular.module('dalanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.data = [{
            year: 1987,
            what: 'birth'
        },{
            year: 2000,
            what: 'high school'
        },{
            year: 2004,
            what: 'college'
        }];

  });
