(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://patel3778-data.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
