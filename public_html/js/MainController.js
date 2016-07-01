/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var sighIn = false;


module.config( function($routeProvider,$httpProvider){
        
        
        $routeProvider.when('/', {
		
		templateUrl: 'views/BeginPage.html'
                        
	}).when('/ProfilePage', {
		
		templateUrl: 'views/ProfilePage.html'
                        
	}).when('/CreateGameForm', {
		
		templateUrl: 'views/CreateGameForm.html'
                
	}).when('/JoinGamePage', {
		
		templateUrl: 'views/JoinGamePage.html'
                
	}).when('/ManageGamePage', {
		
		templateUrl: 'views/ManageGamePage.html'
                
	}).when('/NewUserForm', {
		
		templateUrl: 'views/NewUserForm.html'
	})
        .when('/ScoreForm', {
		
		templateUrl: 'views/ScoreForm.html'
	});
});


module.controller( 'BeginPageController', ['$scope', '$http', function($scope, $http){
    if(window.location.href === "http://www.scoreapp.shiksha/#/"){
        //Do nothing. Normal situation
    }
    else{
        //User is logged in and is redirected back with authToken
        var authorizatinToken = window.location.href;
        var sliceResult = authorizatinToken.slice(45,173);
        //console.log(sliceResult);
        var getAccesTokenUrl = "http://api.scoreapp.shiksha/token/" + sliceResult;
        //console.log(getAccesTokenUrl);
        $http.get(getAccesTokenUrl).then(function(accesTokenResponse){
             //console.log(JSON.stringify(accesTokenResponse));
             setAccess_Token(accesTokenResponse.data.access_token);
             //console.log(JSON.stringify(window.access_token));
             window.location.href = "#/ProfilePage";
        });
    }
        
    $scope.LoginButton = function(){
        window.location.href="http://api.scoreapp.shiksha/login"; 
    };
    
    
}]);


