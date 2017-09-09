var servObj = angular.module('schoolApp.serviceInterface',[]);

servObj.service('serviceUtility',function($http){

	this.ajaxJSONPost = function(url,reqValues){
			return $http({
				url:url,
				method:'POST',
				data:reqValues,
			/*	headers: {
        			'Content-Type': 'application/x-www-form-urlencoded'  //'application/json'
    			} */

			});
	}

	this.successServiceCallBack= function(response){

		var responseObject = {};

		if(response.status==200){
			responseObject = response.data;
		}
		return responseObject;
	}

	this.responsefailureCallBack = function(responsedt){

        var responseObject={};
        switch(responsedt.status){


            case 400:{
                responseObject.statusCode = responsedt.status;
                responseObject.errorString = "Your Request is inValid";
                break;
            }

            case 401:{
                responseObject.statusCode = responsedt.status;
                responseObject.errorString = "Your are unauthorized for the request you have made";
                break;
            }
            case 403:{
                responseObject.statusCode = responsedt.status;
                responseObject.errorString = "Your are forbidden to access the server";
                break;
            }
            case 404:{
                responseObject.statusCode = responsedt.status;
                responseObject.errorString = "The resource you are trying to access is not found on the server.";

                break;
            }
            case 408:{
                responseObject.statusCode = responsedt.status;
                responseObject.errorString = "Your Request has timed out";
                break;
            }
            default:{
                responseObject.statusCode = responsedt.status;
                responseObject.errorString= "Technical error has occured , please try again later."
            }


        }

       return responseObject;
    } 

})