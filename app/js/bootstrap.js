/**
 * Created by Martynas on 1/10/2016.
 */
/*jshint browser:true */
'use strict';
// load the main app file
require('./vendor')();                    // run an empty function
var appModule = require('../app');
// replaces ng-app="appName"
angular.element(document).ready(function () {
    angular.bootstrap(document, [appModule.name], {
        //strictDi: true
    });
    alert("works 2");
});