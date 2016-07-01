/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.controller('ScoreFormController', ['$scope', '$http', function($scope, $http)
    {
        $scope.id = getGameRoomid();
        
        $scope.updateScore = function()
        {
            //update score api request
            window.location.href = '#/ManageGamePage';
        };
        
    }]);
