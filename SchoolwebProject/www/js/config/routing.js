var routing = angular.module('schoolApp.routing',[]);

routing.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider
            
            .state('main', {
                url : '/main',
                templateUrl : 'mainContainer.html',
                abstract : true,
                controller : 'MainController'
            })
            .state('main.tabs', {
                 url: '/tabs',
                 views: {
                     'menuContent': {
                         templateUrl: 'tabs.html',
                         controller : 'TabsPageController'
                     }
                 }
            })
            .state('main.tabs.dash', {
                url: '/dash',
                views: {
                'tab-dash': {
                templateUrl: 'app/templates/tab-dash.html',
                controller: 'DashCtrl'
                }
                }
            })
            .state('main.tabs.gps', {
                url: '/gps',
                views: {
                'tab-gps': {
                templateUrl: 'app/templates/tab-gps.html',
                controller: 'gpsController'
                }
                }
            })
            .state('main.tabs.myaccount', {
                url: '/myaccount',
                views: {
                'tab-account': {
                templateUrl: 'app/templates/tab-account.html',
                controller: 'accountController'
                }
                }
            })
            .state('login', {
                 url: '/login',
                templateUrl: 'app/templates/login.html',
                controller:'LoginCtrl'
            });

            $urlRouterProvider.otherwise('/login');

	}]
)