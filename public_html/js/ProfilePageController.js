module.controller('ProfileController', ['$scope', '$http', function ($scope, $http) {


        if (getAccess_Token() === "noToken")

        {
            window.location.href = '#/NewUserForm';
        } else {
            console.log(getAccess_Token());

            $scope.user = {
                FirstName: "",
                LastName: "",
                UserName: ""
            };

            $scope.specificRecords = -1;



            $http.get("/me", {headers: {'Accestoken': getAccess_Token()}})
                    .then(function (user) {

                        console.log(user.data.response.data);
                        $scope.user = user.data.response.data[0];

                    });

            $http.get("/getListOfMyGames", {headers: {'Accestoken': getAccess_Token()}}).then(function (userGames)
            {
                console.log(userGames.data.response.data);
                $scope.userGames = userGames.data.response.data;
            });


            $scope.setId = function () {
                $scope.specificRecords = arguments[0];
            };
        }

    }]);


