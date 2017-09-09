var mainController = angular.module('schoolApp.mainController',[]);

mainController.controller('MainController', [ '$scope', function($scope) {
        $scope.toggleMenu = function() {
            $scope.sideMenuController.toggleLeft();
        }
}])