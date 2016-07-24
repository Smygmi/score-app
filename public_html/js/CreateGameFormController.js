module.controller('CreateGameFormController', ['$scope', '$http', function ($scope, $http)
    {
        if (getAccess_Token() === "noToken")
        {
            window.location.href = '#/NewUserForm';
        } else {
            $scope.users = [];

            $http.get("/getListOfOtherUsers", {headers: {'Accestoken': getAccess_Token()}}).then(function (users) {

                $scope.users = users.data.response.data;
                $http.get("/me", {headers: {'Accestoken': getAccess_Token()}}).then(function (user) {
                    $scope.users.push(user.data.response.data[0]);
                });
            });

            $scope.Player1;
            $scope.Player2;
            $scope.Score;
            $scope.Score1 = 0;
            $scope.Score2 = 0;

            $scope.gameRoom = {
                data: {
                    Title: "",
                    StartingDate: "",
                    EndingDate: "",
                    PrivateGame: false,
                    Score: "0-0"
                }
            };

            $scope.submit = function () {
                //Clear player1 & 2
                delete $scope.gameRoom.data.Player1;
                delete $scope.gameRoom.data.Player1UserName;
                delete $scope.gameRoom.data.Player2;
                delete $scope.gameRoom.data.Player2UserName;

                //Checks if Title is empty
                if ($scope.gameRoom.Title === "") {
                    //$scope.NoTitleError.style.display = 'initial';
                    return;
                } else
                //$scope.NoTitleError.style.display = 'none';

                //Checks if Starting Date is empty
                if ($scope.gameRoom.StartingDate === "")
                {
                    //$scope.NoStartingDateError.style.display = 'initial';
                    return;
                } else
                //$scope.NoStartingDateError.style.display = 'none';

                //Checks if Ending Date is empty
                if ($scope.gameRoom.EndingDate === "")
                {
                    //$scope.NoEndingDateError.style.display = 'initial';
                    return;
                } else
                //$scope.NoEndingDateError.style.display = 'none';


                /*//Checks if Ending Date is set earlier than starting date
                 if($scope.gameRoom.EndingDate < $scope.gameRoom.StartingDate && !$scope.isInfinite)        
                 {$scope.FalseEndingDateError.style.display = 'initial';
                 return;}
                 else    $scope.FalseEndingDateError.style.display = 'none';
                 */

                if ($scope.Player1)
                {
                    $scope.gameRoom.data.Player1 = $scope.Player1;
                    for (var i = 0; i < $scope.users.length; i++)
                    {
                        if ($scope.users[i].ID == $scope.Player1)
                        {
                            console.log($scope.users[i].UserName);
                            $scope.gameRoom.data.Player1UserName = $scope.users[i].UserName;
                            break;
                        }
                    }
                }

                if ($scope.Player2)
                {
                    $scope.gameRoom.data.Player2 = $scope.Player2;
                    for (var i = 0; i < $scope.users.length; i++)
                    {
                        if ($scope.users[i].ID == $scope.Player2)
                        {
                            console.log($scope.users[i].UserName);
                            $scope.gameRoom.data.Player2UserName = $scope.users[i].UserName;
                            break;
                        }
                    }
                }
                $scope.gameRoom.data.Score = "" + $scope.Score1 + "-" + $scope.Score2;

                var toPush = JSON.stringify($scope.gameRoom);

                console.log(toPush);

                $http.post("/createGameRoom", toPush, {headers: {'Accestoken': getAccess_Token()}}).then(function (response)
                {
                    console.log(response);
                    if (response.data.response.data === "GAMEROOM_CREATED") {
                        window.location.href = '#/ManageGamePage';
                    }
                });
            };
        }
    }]);
