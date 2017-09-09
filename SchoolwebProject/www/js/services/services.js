angular.module('schoolApp.services', [])

.service('LoginService', function($q,$http,$ionicLoading,$timeout,USER_ROLES,requestURL ,serviceUtility) {
      var LOCAL_TOKEN_KEY = 'yourTokenKey';
      var username = '';
      var isAuthenticated = false;
      var authToken;
      var role = '';
    return {
        loginUser: function(name, pw,rem) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            var requestObject={};
 
            if (name == 'user' && pw == 'secret') {
                //Logic to store in localstorage based on remember me
                // Make a request and receive your auth token from your server
                
                if(rem){
                    storeUserCredentials(name + '.' + 'yourServerToken');
                }

                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },

        logout : function() {
        destroyUserCredentials();
        },
        username: function() {return username;},
        show:  function() {
            $ionicLoading.show({
            template: '<p>Loading...</p><ion-spinner icon="ripple" class="spinner-calm"></ion-spinner>'
            });
        },
        hide: function(){
                $ionicLoading.hide();
        },
        isAuthenticated: function() {return isAuthenticated;},
        loadUserCredentials : function(){
            var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
            if (token) {
              useCredentials(token);
              return token;
            }
        },
        storeUsercreds: function(token){
            storeUserCredentials(token);
        }
    };
    

    function destroyUserCredentials() {
    authToken = undefined;
    username = '';
    isAuthenticated = false;
    $http.defaults.headers.common['X-Auth-Token'] = authToken;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
    }    

    //funtion to use token and do further logic
    function useCredentials(token) {
    username = token.split('.')[0];
    isAuthenticated = true;
    authToken = token;
 
    if (username == 'admin') {
      role = USER_ROLES.admin
    }
    if (username == 'user') {
      role = USER_ROLES.parent
    }
    // Set the token as header for your requests!
    $http.defaults.headers.common['X-Auth-Token'] = token;
    }

    function storeUserCredentials(token) {
    window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
    useCredentials(token);
    }

    

});
