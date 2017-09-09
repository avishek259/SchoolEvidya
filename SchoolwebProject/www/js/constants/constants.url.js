var conObj =angular.module('schoolApp.constants',[]);

conObj.constant('requestURL',{

 'BASEURL' : 'http://evidyaMobileService.iappsforme.com/', 
 'SAVELEAVENOTE_URL':'Parentservice.svc/SaveLeaveNote',
 'LOGINSERVICE_URL':'api/Login/'  

});

conObj.constant('USER_ROLES', {
  admin: 'admin_role',
  parent: 'parent_role'
});