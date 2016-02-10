'use strict';

/**
 * @ngdoc function
 * @name homework4App.controller:TutorialCtrl
 * @description
 * # TutorialCtrl
 * Controller of the homework4App
 */
angular.module('homework4App')
  .controller('TutorialCtrl', ['$http', function ($http) {
      var self = this;
    $http.get('tutorials.json').success(function (data) {
        self.tutorials = data;
    })
    
  }]);
