/**
 * Created by Martynas on 1/10/2016.
 */
module.exports = angular.module('to-do', []);
var app;
app = angular.module('to-do', [])
    .controller('WelcomeController', function ($scope) {
        $scope.greeting = 'Welcome! Welcome friends';
    });