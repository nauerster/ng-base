'use strict';

var app = angular.module('app', [
    'ui.router',
    'ui.bootstrap'
    //'restangular',
    //'base64'
]);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('info', {
        url: '/info',
        views: {
            content: {
                templateUrl: '/includes/views/info/partial.info.html',
                controller: 'InfoCtrl'
            }
        }
    }).state('dashboard', {
        url: '/dashboard',
        views: {
            content: {
                templateUrl: '/includes/views/dashboard/partial.dashboard.html',
                controller: 'DashboardCtrl'
            }
        }
    });

    $urlRouterProvider.otherwise('/info');
});



// configure Restangular
// app.config(function(RestangularProvider) {
//     // configure base url for Restangular
//     var apiUrl = 'http://mock.cerberus.dev';
//     RestangularProvider.setBaseUrl(apiUrl);

//     // add a response intereceptor
//     RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
//         var extractedData;
//         // .. to look for getList operations
//         if (operation === "tags") {
//             // .. and handle the data and meta data
//             extractedData = data.data.data;
//             extractedData.meta = data.data.meta;
//         } else {
//             extractedData = data.data;
//         }
//         return extractedData;
//     });

//     RestangularProvider.setDefaultHeaders({
//         Authorization: 'Basic YWRtaW5AdW5kZXJncm91bmRlbGVwaGFudC5jb206cGFzc3dvcmQ='
//     });
// });

// app.run(function($rootScope, $state) {
//     $rootScope.$state = $state;
// });
