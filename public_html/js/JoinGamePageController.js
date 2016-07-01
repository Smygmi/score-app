/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.controller ('JoinGamePageController', ['$scope', '$http', function($scope, $http)
{
    $scope.gamesReadyToJoin = " ";
    $scope.specificGameToJoin = " ";
    
    if(window.location.href === "http://www.scoreapp.shiksha/#/JoinGamePage"){
        //User is not logged in. Handle it here.
    }
    else{
        $http.get("/feikki_p_responset/feikki_gameroomeja.php").then(function(gameroomRecords){
                 console.log(JSON.stringify(gameroomRecords.data.gamerooms));
            $scope.gamesReadyToJoin = gameroomRecords.data.gamerooms;
            });
    }
    
    
    $scope.setId = function()
        {
            $scope.specificGameToJoin = arguments[0];
        }
        
    $scope.SearchButton = function(){
        //search function filtering goes here.
        
    }
    /*
    $scope.displayGameBox = document.getElementById("displayGameBox");
    $scope.displayGameBox.style.display = 'none';
    
    $scope.dataHolder = [];
    
     $http.get("/~t4toan00/testi/feikki_gameroomeja.php").then(function(response){
        console.log(JSON.stringify(response));
        $scope.dataHolder =  response.data.gamerooms;
        console.log($scope.dataHolder);
        
        });  
        
    $scope.displayGame = function(){
        
    setGameRoomId(arguments[0]);
    $scope.TempId = getGameRoomid();
    
    $scope.displayGameBox.style.display = 'initial';
    console.log(getGameRoomid());
    }
  */
}]);



// ÄLÄ HUKKAA dataHolder.data.gameroom