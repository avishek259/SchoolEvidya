angular.module('schoolApp', ['ionic','schoolApp.accountControl','schoolApp.gpsControl','schoolApp.tabsController','schoolApp.mainController','schoolApp.loginController','schoolApp.dashBoardControl','schoolApp.routing','schoolApp.services','schoolApp.constants','schoolApp.serviceInterface']) 

    .config([ '$ionicConfigProvider','$compileProvider', '$httpProvider', function($ionicConfigProvider,$compileProvider,$httpProvider) {

        $ionicConfigProvider.tabs.position("bottom");
        $ionicConfigProvider.tabs.style("standard"); 
        $compileProvider.imgSrcSanitizationWhitelist(/\/img|..\/\b/);
       
     //   $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        $httpProvider.defaults.headers.common['Content-Type']= 'application/json; charset=utf-8';
    //    $httpProvider.defaults.headers.post = {};
      
    }])
    .run(
    	function($ionicPlatform) {
  			$ionicPlatform.ready(function() {

          //TODO

  			})
  		}
  	);



