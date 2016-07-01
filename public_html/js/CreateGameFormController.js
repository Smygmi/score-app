/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var gameRoomData = {
	gameRoomTitle: 	"",
        infiniteCheck: false,
        startingDate: "",
        endingDate: "",
        privateCheck: false,
        players: 0,
        playerList: [],
        parameterNames: []
};


module.controller('CreateGameFormController', ['$scope', '$http', function($scope, $http)
    {
    $scope.gameRoom = gameRoomData;
    $scope.gameRooms = [];
    $scope.indexCounter = 0;
    $scope.parameterCounter = 0;
    
    $scope.parameterInputs = [  document.getElementById('parameterName1'),
                                document.getElementById('parameterName2'),
                                document.getElementById('parameterName3'),
                                document.getElementById('parameterName4'),
                                document.getElementById('parameterName5')];
                            
    $scope.removeButtons = [    document.getElementById("removeParameter1"),
                                document.getElementById('removeParameter2'),
                                document.getElementById('removeParameter3'),
                                document.getElementById('removeParameter4'),
                                document.getElementById('removeParameter5')];                        
    
    
    $scope.NoTitleError = document.getElementById("NoTitleError");
    $scope.NoStartingDateError = document.getElementById("NoStartingDateError");
    $scope.NoEndingDateError = document.getElementById("NoEndingDateError");
    $scope.FalseEndingDateError = document.getElementById("FalseEndingDateError");
    
    $scope.NoTitleError.style.display = 'none';
    $scope.NoStartingDateError.style.display = 'none';
    $scope.NoEndingDateError.style.display = 'none';
    $scope.FalseEndingDateError.style.display = 'none';
    
    if($scope.parameterCounter === 0)       // Initially hides the parameter 
    {                                       // boxes and their remove buttons
        for (i = 0; i < 5; i++) 
        {
        $scope.parameterInputs[i].style.display='none';
        $scope.removeButtons[i].style.display='none';
        }
    }
    
    
     $scope.isInfinite;
     

    $scope.submit = function(){
        
        console.log($scope.isInfinite);
        
        if($scope.gameRoom.infiniteCheck === true) {
            $scope.gameRoom.startingDate ="";
            $scope.gameRoom.endingDate="";
            console.log("infinite");
            $scope.isInfinite = true;
        }
        else
        {
            console.log("not infinite");
            $scope.isInfinite = false;
        }
        
         $scope.NoTitleError.style.display = 'none';
         $scope.NoStartingDateError.style.display = 'none';
         $scope.NoEndingDateError.style.display = 'none';
         $scope.FalseEndingDateError.style.display = 'none';
        
        
        //Checks if Title is empty
        if($scope.gameRoom.gameRoomTitle === ""){
            $scope.NoTitleError.style.display = 'initial'; 
            return; }
        else   $scope.NoTitleError.style.display = 'none'; 
        
        //Checks if Starting Date is empty
        if($scope.gameRoom.startingDate === "") 
                {$scope.NoStartingDateError.style.display = 'initial';
                return;}
        else    $scope.NoStartingDateError.style.display = 'none';
                
        //Checks if Ending Date is empty
        if($scope.gameRoom.endingDate === "") 
                {$scope.NoEndingDateError.style.display = 'initial';
                return;}
        else    $scope.NoEndingDateError.style.display = 'none';
                
        
        //Checks if Ending Date is set earlier than starting date
        if($scope.gameRoom.endingDate < $scope.gameRoom.startingDate && !$scope.isInfinite)        
                {$scope.FalseEndingDateError.style.display = 'initial';
                return;}
        else    $scope.FalseEndingDateError.style.display = 'none';

        

            $scope.gameRooms.push({ 
                                title:  $scope.gameRoom.gameRoomTitle,
                                infiniteEvent: $scope.gameRoom.infiniteCheck,
                                startingDate:   $scope.gameRoom.startingDate,
                                endingDate:     $scope.gameRoom.endingDate,
                                privateGame: $scope.gameRoom.privateCheck,
                                maxPlayers: $scope.gameRoom.players,
                                adminUserID:"Admin", //need user id from login info here
                                parameterNames: $scope.gameRoom.parameterNames
                            });
           
            var toPush;
            toPush = $scope.gameRooms;
            $http.post("/~t4toan00/testi/post_testi_data.php", toPush);
            
            //wait for gamerooms id from post response to be set on managegameroom
            var newId = 1111;
            setGameRoomId(newId);
            window.location.href = '#/ManageGamePage';
 
        

    };
    
     
    $scope.hideDatePickers = function()
    {
       var startingDate = document.getElementById('startingDate');
       var endingDate = document.getElementById('endingDate');
       
       if($scope.isInfinite != true) {
            $scope.isInfinite = true;
            startingDate.style.display='none';
            endingDate.style.display='none';
        }
        
        else {
            $scope.isInfinite = false;
            startingDate.style.display='initial';
            endingDate.style.display='initial';
        }
    }
    
    
    
    $scope.addParameter = function()
    {
        if($scope.parameterCounter < 5) {
        var parameterToShow = $scope.parameterInputs[$scope.parameterCounter];
        var removeButtonToShow = $scope.removeButtons[$scope.parameterCounter];
        parameterToShow.style.display='initial';
        removeButtonToShow.style.display='initial';
        $scope.parameterCounter += 1;
        }
    };
    
   $scope.removeParameter = function()
   {
    if($scope.parameterCounter >= 0) {
        var id = arguments[0] - 1;
        var parameterToRemove = $scope.parameterInputs[id];
        var removeButtonToRemove = $scope.removeButtons[id];
        $scope.gameRoom.parameterNames[id] = "";
        parameterToRemove.style.display='none';
        removeButtonToRemove.style.display='none';
        $scope.parameterCounter -= 1;
        }
    };
    
    
    
 }]);
