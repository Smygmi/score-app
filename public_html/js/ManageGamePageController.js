/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
var fetchedGameRoomData = {
    gameRoomData : [
        { 
            id:             1111,
            title:          "",
            infiniteEvent:  true,
            startingDate:   "",
            endingDate:     "",
            privateGame:    true,
            maxPlayers:     0,
            adminUserID:    "pp",
            score:          "0",
            parameterNames: [],
            parameterValues:[],
            playerUserIDs:  ["", ""]
        }
        
            ]
   };

*/




module.controller('ManageGamePageController', ['$scope', '$http', function($scope, $http)
    {
        $scope.setGameRoomId = function(){
            $scope.id = arguments[0];
        };

        $scope.getGameRoomid = function()
        {
            return $scope.id;
        };
        
        $scope.gameRoom = " ";
        $scope.testID;
        $scope.id = " ";
        $scope.readyCheckState = false;
        
       
            $http.get("/feikki_p_responset/feikki_gameroomeja.php").then(function(response) {
                console.log(JSON.stringify(response));
             //fetchedGameRoomData.gameRoomData = apu;
             $scope.gameRoom = response.data.gamerooms;
        });

        $scope.setId = function()
        {
            $scope.id = arguments[0];
            //window.location.href= "#/ManageGamePage";
            console.log($scope.id);
        };
        
        
        
        $scope.readyCheck = function()
        {
            document.getElementById('readyLabel').style.display = 'inline';
        };
        
        $scope.start = function()
        {
            window.location.href = '#/ScoreForm';
        };
        
    }]);

