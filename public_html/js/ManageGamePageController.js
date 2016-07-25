module.controller('ManageGamePageController', ['$scope', '$http', function ($scope, $http)
    {
        $scope.responseMessage = "";
        $scope.adminGames;
        $scope.id = -1;

        if (getAccess_Token() === "noToken")
        {
            window.location.href = '#/NewUserForm';
        } else {
            $scope.score1;
            $scope.score2;

            $http.get("/getListRoomsWereAdmin", {headers: {'Accestoken': getAccess_Token()}}).then(function (adminGames)
            {
                $scope.adminGames = adminGames.data.response.data;
                for (var i in $scope.adminGames) {
                    var temp = $scope.adminGames[i].Score.split("-");
                    $scope.adminGames[i].score1 = temp[0];
                    $scope.adminGames[i].score2 = temp[1];
                }
            });

            $scope.setId = function ()
            {
                $scope.id = arguments[0];
            };

            $scope.formatScore = function () {
                var score = arguments[0];
                var out = score.split('-');
                if (arguments[1] === 1)
                {
                    return out[0];
                } else {
                    return out[1];
                }
            };

            $scope.updateScore = function (Room_ID, score1, score2) {
                console.log(Room_ID + score1 + score2);
                $scope.toPut = {
                    data: {
                        Room_ID: arguments[0]
                    }
                };

                $scope.toPut.data.Score = "" + arguments[1] + "-" + arguments[2];

                $http.put("/updateScore", $scope.toPut, {headers: {'Accestoken': getAccess_Token()}})
                        .then(function (response)
                        {
                            if (response.data.response.data === "GAMEROOM_UPDATE_SUCCESS") {
                                $scope.responseMessage = "Update succesfull";
                                setInterval(function () {
                                    $scope.responseMessage = "";
                                }, 2000);
                            } else {
                                $scope.responseMessage = "Update failed";
                            }
                        });
            };
        }
    }]);

