/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var log_in = {
    data: {
        UserName: "",
        Password: ""
    }
};

var create = {
    data: {
        UserName: "",
        Password: "",
        FirstName: "",
        LastName: ""
    }

};

module.controller('NewUserController', ['$scope', '$http', function ($scope, $http) {

        $scope.log_in_UserName = "";
        $scope.log_in_Password = "";

        $scope.create_user_UserName = "";
        $scope.create_user_Password = "";
        $scope.create_user_FirstName = "";
        $scope.create_user_LastName = "";

        $scope.createUser = function () {

            create.data.UserName = $scope.create_user_UserName;
            create.data.Password = $scope.create_user_Password;
            create.data.FirstName = $scope.create_user_FirstName;
            create.data.LastName = $scope.create_user_LastName;

            var toPush = JSON.stringify(create);
            $http.post("http://smygminraspberry1.ddns.net:8081/create_user", toPush)
                    .then(function (create_user_response) {
                        var response = JSON.Parse(create_user_response);
                        console.log(response);
                    });

        };

        $scope.logInUser = function () {

            log_in.data.UserName = $scope.log_in_UserName;
            log_in.data.Password = $scope.log_in_Password;

            var toPush = JSON.stringify(log_in);
            $http.post("http://smygminraspberry1.ddns.net:8081/log_in", toPush).then(function (log_in_user_response) {
                        var response = JSON.Parse(log_in_user_response);
                        console.log(response);
                    });;
        };


    }]);
