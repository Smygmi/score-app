module.controller( 'BeginPageController', ['$scope', '$http', function($scope){        
    $scope.LoginButton = function(){
        window.location.href="#/NewUserForm"; 
    };        
}]);
