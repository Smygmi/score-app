/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var log_in = {
    data: {
        UserName: "",
        UserPassword: ""
    }
};

var create = {
    data: {
        UserName: "",
        UserPassword: "",
        FirstName: "",
        LastName: ""
    }

};

module.controller('NewUserController', ['$scope', '$http', function ($scope, $http) {

        $scope.log_in_UserName = "";
        $scope.log_in_UserPassword = "";

        $scope.create_user_UserName = "";
        $scope.create_user_UserPassword = "";
        $scope.create_user_FirstName = "";
        $scope.create_user_LastName = "";

        $scope.createUser = function () {

            create.data.UserName = $scope.create_user_UserName;
            create.data.UserPassword = $scope.create_user_UserPassword;
            create.data.FirstName = $scope.create_user_FirstName;
            create.data.LastName = $scope.create_user_LastName;

            var toPush = JSON.stringify(create);
            $http.post("/create_user", toPush)
                    .then(function (create_user_response) {
                        var response = create_user_response;
                        console.log(response);
                    });

        };

        $scope.logInUser = function () {

            log_in.data.UserName = $scope.log_in_UserName;
            log_in.data.UserPassword = $scope.log_in_UserPassword;

            var toPush = JSON.stringify(log_in);
            $http.post("/log_in", toPush)
                    .then(function (log_in_user_response) {
                        var response = log_in_user_response.data.response.data;
                        //console.log(response);
                        if(response.AccesToken)
                        {
                            setAccess_Token(response.AccesToken);
                            console.log("successul");
                            window.location.href = '#/ProfilePage';
                        }

                    });
            ;
        };


    }]);
