var tabsControl = angular.module('schoolApp.tabsController',[]);

tabsControl.controller('TabsPageController', [ '$scope', '$state','$rootScope', function($scope, $state,$rootScope) {
        
        
        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];

        $scope.changetitle = function(inputname){

        	switch(inputname){

        		case 1 :{
					$rootScope.titleofpage = 'DashBoard';
					$state.go('main.tabs.dash');
        			break;
        		}

        		case 2:{
					$rootScope.titleofpage = 'Tracking';
					$state.go('main.tabs.gps');
        			break;
        		}

        		case 3:{
        			$rootScope.titleofpage = 'Subscription';
        			$state.go('main.tabs.myaccount')
        		}

        		default:{

        			break;
        		}

        	}

        }

}])