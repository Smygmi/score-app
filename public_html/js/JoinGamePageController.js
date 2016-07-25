module.controller('JoinGamePageController', ['$scope', '$http', function ($scope, $http)
    {
        $scope.gamesToJoin;
        $scope.focusedGame = -1;

        if (getAccess_Token() === "noToken")
        {
            window.location.href = '#/NewUserForm';
        } else {
            $http.get("/getListOfGamesToJoin", {headers: {'Accestoken': getAccess_Token()}})
                    .then(function (gameRooms) {
                        $scope.gamesToJoin = gameRooms.data.response.data;
                    });
        }

        $scope.setId = function ()
        {
            $scope.focusedGame = arguments[0];
        };

        $scope.formatDate = function () {
            var s = arguments[0];
            var date = s.split('T');

            return date[0];
        };


        $scope.joinGame = function () {
            $scope.toPush = {
                data: {
                    Room_ID: $scope.focusedGame
                }
            };

            $scope.gameRoomToJoin;
            for (var i = 0; i < $scope.gamesToJoin.length; i++)
            {
                if ($scope.gamesToJoin[i].Room_ID === $scope.focusedGame)
                {
                    $scope.gameRoomToJoin = $scope.gamesToJoin[i];
                }
            }

            if ($scope.gameRoomToJoin.Player1 === null)
            {
                $scope.toPush.data.Player1 = true;

            } else if ($scope.gameRoomToJoin.Player2 === null)
            {
                $scope.toPush.data.Player2 = true;
            }

            $http.post("/joinGame", $scope.toPush, {headers: {'Accestoken': getAccess_Token()}})
                    .then(function (response)
                    {
                        if(response.data.response.data === "GAMEROOM_JOIN_SUCCESS"){
                            console.log("successul");
                            window.location.href = '#/ProfilePage';
                        }
                        else{
                            alert("Joinning failed");
                        }
                    });
        };

        $scope.SearchButton = function () {
            //search function filtering goes here.

        };
    }]);