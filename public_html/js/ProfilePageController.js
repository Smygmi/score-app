module.controller('ProfileController', ['$scope', '$http', function($scope, $http){
        //console.log(getAccess_Token());
        
        $scope.userInfo = "";
        $scope.userRecords;
        $scope.specificRecords = " ";
        
        if(window.location.href === "http://www.scoreapp.shiksha/#/ProfilePage"){
            //User is not logged in. No auth token. Handle it here
        }
        else{
            $http.get("/feikki_p_responset/feikki_p1.php").then(function(userRecords){
                 console.log(JSON.stringify(userRecords.data.profile));
            $scope.userInfo = userRecords.data.profile;
            });

            $http.get("/feikki_p_responset/feikki_gameroomeja.php").then(function(gameroomRecords){
                 console.log(JSON.stringify(gameroomRecords.data.gamerooms));
            $scope.userRecords = gameroomRecords.data.gamerooms;
            });
        }
        $scope.setId = function()
        {
            $scope.specificRecords = arguments[0];
        }
        /*
        $scope.records;  // exampleUserRecords;
        $scope.recordsFB;
        $scope.getrecords= "getrecords";
        
        $http.get("/~t4hevi00/feikki_p_responset/feikki_p5.php").then(function(response){
            // console.log(JSON.stringify(response));
        $scope.records = response.data;
        });
        http://api.scoreapp.shiksha/user/current-user
        http://api.scoreapp.shiksha/debug/clone/authorized
        http://api.scoreapp.shiksha/debug/headers
        http://api.scoreapp.shiksha/debug/clone 
        http://api.scoreapp.shiksha/debug/cors
        , {
                headers: {'Authorization': '*'}
            } 
        
       
        
        
        
        $http.get("http://api.scoreapp.shiksha/user/current-user", {
                headers: {'Authorization': '*'}
            }).then(function(responseFB){
             console.log(JSON.stringify(responseFB));
        $scope.recordsFB = responseFB.data;
        });
           
        $scope.interestsData = [
            { gamesorSports: "Write down your interests" }
        ];
        
        $scope.interest = $scope.interestsData;
        $scope.interests = [];   
        
        $scope.add = function(){
            $scope.interests.push({
                gamesorSports: $scope.interest.gamesorSports
            });
            $http.post("/~t4koan01/ScoreApp/testi/post_testi_data.php", $scope.interests);
        };
        $scope.remove = function(){
            for(var i = 0; i < $scope.interests.length; i++) {
                if ($scope.interests[i]["gamesorSports"] === $scope.interest.gamesorSports) {
                    $scope.interests.splice(i,1);
                    return;
                }
            }
        }; 
         */
}]);

/*var exampleUserRecords = { //Example JSON
    records: [
        {
            id: 1234,
            type: 'tournament',
            ranking: 1,
            wins: 29,
            losses: 2,
            privacy: 'private'
        },
        {
            id: 2555,
            type: 'game',
            ranking: 2,
            wins: 12,
            losses: 3,
            privacy: 'public'
        }
    ]
};
*/

