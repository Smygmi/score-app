/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var gameRoomData = {
    data:{
	Title: 	"",
        StartingDate: "",
        EndingDate: "",
        PrivateGame: false,
        Player1 : -1,
        Player1UserName : "",
        Player2 : -1,
        Player2UserName : ""
    }
};


module.controller('CreateGameFormController', ['$scope', '$http', function($scope, $http)
    {
        
        if (getAccess_Token() === "noToken")

        {
            window.location.href = '#/NewUserForm';
        } else {
        
        $scope.users = [];
        
          $http.get("/getListOfOtherUsers", {headers: {'Accestoken': getAccess_Token()}})
                    .then(function (users) {

                        $scope.users = users.data.response.data;
                        $http.get("/me", {headers: {'Accestoken': getAccess_Token()}})
                            .then(function (user) {

                        $scope.users.push(user.data.response.data[0]);

                    });
                    
                    });
        
        $scope.Player1;
        $scope.Player2;
        
        $scope.gameRoom = {
            data:{
        Title: 	"",
        StartingDate: "",
        EndingDate: "",
        PrivateGame: false,
        Score : "0-0"
    }
        }
    
    /*$scope.parameterInputs = [  document.getElementById('parameterName1'),
                                document.getElementById('parameterName2'),
                                document.getElementById('parameterName3'),
                                document.getElementById('parameterName4'),
                                document.getElementById('parameterName5')];
                            
    $scope.removeButtons = [    document.getElementById("removeParameter1"),
                                document.getElementById('removeParameter2'),
                                document.getElementById('removeParameter3'),
                                document.getElementById('removeParameter4'),
                                document.getElementById('removeParameter5')];*/                      
    
    
    $scope.NoTitleError = document.getElementById("NoTitleError");
    $scope.NoStartingDateError = document.getElementById("NoStartingDateError");
    $scope.NoEndingDateError = document.getElementById("NoEndingDateError");
    $scope.FalseEndingDateError = document.getElementById("FalseEndingDateError");
    
    $scope.NoTitleError.style.display = 'none';
    $scope.NoStartingDateError.style.display = 'none';
    $scope.NoEndingDateError.style.display = 'none';
    $scope.FalseEndingDateError.style.display = 'none';
    
    
    /*if($scope.parameterCounter === 0)       // Initially hides the parameter 
    {                                       // boxes and their remove buttons
        for (i = 0; i < 5; i++) 
        {
        $scope.parameterInputs[i].style.display='none';
        $scope.removeButtons[i].style.display='none';
        }
    }*/
     

    $scope.submit = function(){
        
        $scope.gameRoom = {
            data:{
        Title: 	"",
        StartingDate: "",
        EndingDate: "",
        PrivateGame: false,
        Score : "0-0"
    }
        };
        
         $scope.NoTitleError.style.display = 'none';
         $scope.NoStartingDateError.style.display = 'none';
         $scope.NoEndingDateError.style.display = 'none';
         $scope.FalseEndingDateError.style.display = 'none';
        
        
        //Checks if Title is empty
        if($scope.gameRoom.Title === ""){
            $scope.NoTitleError.style.display = 'initial'; 
            return; }
        else   $scope.NoTitleError.style.display = 'none'; 
        
        //Checks if Starting Date is empty
        if($scope.gameRoom.StartingDate === "") 
                {$scope.NoStartingDateError.style.display = 'initial';
                return;}
        else    $scope.NoStartingDateError.style.display = 'none';
                
        //Checks if Ending Date is empty
        if($scope.gameRoom.EndingDate === "") 
                {$scope.NoEndingDateError.style.display = 'initial';
                return;}
        else    $scope.NoEndingDateError.style.display = 'none';
                
        
        /*//Checks if Ending Date is set earlier than starting date
        if($scope.gameRoom.EndingDate < $scope.gameRoom.StartingDate && !$scope.isInfinite)        
                {$scope.FalseEndingDateError.style.display = 'initial';
                return;}
        else    $scope.FalseEndingDateError.style.display = 'none';
        */
        
        if($scope.Player1)
        {
            $scope.gameRoom.data.Player1 = $scope.Player1;
       
            
            for(var i = 0; i < $scope.users.length; i++)
            {
                if($scope.users[i].ID == $scope.Player1)
                {
                    console.log($scope.users[i].UserName);
                    $scope.gameRoom.data.Player1UserName = $scope.users[i].UserName;
                    break;
                }
            }
        }
        
        
        if($scope.Player2)
        {
            $scope.gameRoom.data.Player2 = $scope.Player2;
       
            
            for(var i = 0; i < $scope.users.length; i++)
            {
                if($scope.users[i].ID == $scope.Player2)
                {
                    console.log($scope.users[i].UserName);
                    $scope.gameRoom.data.Player2UserName = $scope.users[i].UserName;
                    break;
                }
            }
        }
            var toPush = JSON.stringify($scope.gameRoom);
            
            console.log(toPush);
            
            $http.post("/createGameRoom", toPush, {headers: {'Accestoken': getAccess_Token()}})
                    .then(function (response)
            {
                console.log(response);
                
            });

            
            //wait for gamerooms id from post response to be set on managegameroom

            //setGameRoomId(newId);
            //window.location.href = '#/ManageGamePage';
 
        

    };
    
     /*
    $scope.hideDatePickers = function()
    {
       var StartingDate = document.getElementById('StartingDate');
       var EndingDate = document.getElementById('EndingDate');
       
       if($scope.isInfinite != true) {
            $scope.isInfinite = true;
            StartingDate.style.display='none';
            EndingDate.style.display='none';
        }
        
        else {
            $scope.isInfinite = false;
            StartingDate.style.display='initial';
            EndingDate.style.display='initial';
        }
    }
        */
    
    
    
   /* $scope.addParameter = function()
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
    */
    
        }
        
 }]);
