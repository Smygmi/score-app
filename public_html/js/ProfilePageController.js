module.controller('ProfileController', ['$scope', '$http', function ($scope, $http) {
        console.log(getAccess_Token());

        $scope.user = {
            FirstName : "",
            LastName : "",
            UserName : ""
        }
        
        
        
        $http.get("/me", {headers: {'Accestoken' : getAccess_Token()}})
                .then(function (user) {
 
            console.log(user.data.response.data);
            $scope.user = user.data.response.data[0];
            
        });
        
        $http.get("/getListOfMyGames", {headers: {'Accestoken' : getAccess_Token()}}).then(function (userGames)
        {
            console.log(userGames.data.response.data);
            $scope.userGames = userGames.data.response.data;
        });
        

       /* $http.get("/feikki_p_responset/feikki_gameroomeja.php").then(function (gameroomRecords) {
            console.log(JSON.stringify(gameroomRecords.data.gamerooms));
            $scope.userRecords = gameroomRecords.data.gamerooms;
        });*/


        $scope.setId = function () {
            $scope.specificRecords = arguments[0];
        };

        
    }]);


