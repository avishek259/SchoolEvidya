var dashBoardControl = angular.module('schoolApp.dashBoardControl',[]);

dashBoardControl.controller('DashCtrl', function($scope,$ionicPopup,$timeout,serviceUtility,requestURL,$ionicModal,$ionicSlideBoxDelegate,$rootScope,LoginService) {
  
  //To hide the loader in case of remember me flow - where auth token is in local storage and loader shown in login page
  //To do : move the loader utility to common utility service from login service .
  LoginService.hide();  
  $scope.groups = []; 

  $ionicModal.fromTemplateUrl('./app/templates/modalpopup.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.notificationmodal = modal;
  });

  /**
  * This function would be called when the image is changed in the slideshow.
  *
  */
  $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
  };

  $scope.aImages = [{
        'src' : './app/img/diwalicrackers.png', 
        'msg' : ''
      }, {
        'src' : './app/img/diwali.png', 
        'msg' : ''
      }, { 
        'src' : './app/img/diwalilights.png', 
        'msg' : ''
      }
  ];

  $scope.openModal = function() {
      $scope.notificationmodal.show();
      $ionicSlideBoxDelegate.update();
  };
  

  
  for (var i=0; i<2; i++) {
    $scope.groups[i] = {
      name: "Leave Request",
      items: []
    };
  }

  $scope.items = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ];

  $scope.groups[0].name="Leave Request";
  $scope.groups[1].name="Notification History";

  $scope.sampledate = new Date();


  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

  /**
  *This method is used to make the service call to apply the leave .
  *
  */
  $scope.applyLeave = function(){

    var url = requestURL.BASEURL+requestURL.SAVELEAVENOTE_URL;

    var fromDate = new Date();
    var toDate = new Date(fromDate.getTime()+(5*24*60*60*1000));

    var requestObject = {};

    requestObject.DeviceID=524241408;
    requestObject.studentId="Hardik Amlani";
    requestObject.LeaveTypeID="Sick Leave";
    requestObject.LeaveFrom = fromDate.getTime();
    requestObject.LeaveTo = toDate.getTime();
    requestObject.NoOfDays = daysDifference(fromDate,toDate);
    requestObject.Remarks = "This is a Dummy Request";
    requestObject.ApprovalStatus =0;
    requestObject.IsActive = 1;


    serviceUtility.ajaxJSONPost(url,requestObject).then(
      function(response){
        var respObj =   serviceUtility.successServiceCallBack(response);
        console.log(JSON.stringify(respObj));
        $scope.showAlert('Leave request submitted successfully.');
      },
      function(response){
        var responseObject = serviceUtility.responsefailureCallBack(response);
        $scope.showAlert(responseObject.errorString);
      }

    )

    
  }


   // An alert dialog
  $scope.showAlert = function(message) {
   var alertPopup = $ionicPopup.alert({
     title: 'Result',
     template: message
   });

   alertPopup.then(function(res) {
     console.log('Message logged');
   });
 };


function daysDifference(fromDate,toDate){

    var retValue = 1;

    if(angular.isDefined(fromDate) && angular.isDefined(toDate)){
      retValue = (toDate.getTime() - fromDate.getTime())/(24*60*60*1000);
    }

    return retValue;
}



})