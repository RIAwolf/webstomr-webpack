'use strict';

require('./vendor')();
var appModule = require('../app');

for (var i = 0; i < 5; i++) {
    console.log(i);
}

angular.element(document).ready(function () {
    angular.bootstrap(document, [appModule.name], {});
});