var loginController = angular.module('schoolApp.loginController',[]);

loginController.controller('LoginCtrl', function ($scope, LoginService, $timeout, $ionicPopup, $ionicPlatform, $state,$rootScope,$ionicModal,$ionicSlideBoxDelegate,requestURL,serviceUtility){
        $scope.data = {};
        $scope.loginObj ={username:'',password:''};
        $scope.tokenExist = false;
        $scope.remember = {
        val : true
        };
        $scope.login = function() {

            var url = requestURL.BASEURL+requestURL.LOGINSERVICE_URL;
            var requestObject={};
            requestObject.UserName = $scope.loginObj.username;
            requestObject.Password=$scope.loginObj.password;

            serviceUtility.ajaxJSONPost(url,requestObject).then(
             function(response){
                 var respObj =   serviceUtility.successServiceCallBack(response);
                 if($scope.remember.val){
                    LoginService.storeUsercreds(name + '.' + 'yourServerToken');
                }
                 $rootScope.titleofpage = 'DashBoard';
                $state.go('main.tabs.dash');

            
             },
            function(response){
                  var responseObject = serviceUtility.responsefailureCallBack(response);
                    var alertPopup = $ionicPopup.alert({
                    title: 'Login failed!',
                    template: 'Please check your credentials!'
                });
             }

             )

        };

       

        $scope.checkTokenExist = function() {
              $scope.tokenExist =  LoginService.loadUserCredentials(); 
              if($scope.tokenExist){
                    // Start showing the progress
                    LoginService.show(); 
                      $timeout( function(){
                        LoginService.hide();
                        $rootScope.titleofpage = 'DashBoard';
                         $state.go('main.tabs.dash'); 
                      }, 500 );
                }
        };

        // Ready functions
        $ionicPlatform.ready(function() {
                
           $scope.checkTokenExist();

        });

        $ionicModal.fromTemplateUrl('./app/templates/newuserRegistration.html', {
            scope: $scope
        }).then(function(modal) {
             $scope.userRegistration = modal;
        });

        $ionicModal.fromTemplateUrl('./app/templates/forgotPasswordScreen.html', {
            scope: $scope
        }).then(function(modal) {
             $scope.forgotPassword = modal;
        });
        
        $scope.openModal = function() {
            $scope.userRegistration.show();
            $ionicSlideBoxDelegate.update();
        };
})