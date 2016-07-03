var sighIn = false;


module.config(function ($routeProvider, $httpProvider) {


    $routeProvider.when('/', {
        templateUrl: 'views/BeginPage.html'

    }).when('/ProfilePage', {
        templateUrl: 'views/ProfilePage.html'

    }).when('/CreateGameForm', {
        templateUrl: 'views/CreateGameForm.html'

    }).when('/JoinGamePage', {
        templateUrl: 'views/JoinGamePage.html'

    }).when('/ManageGamePage', {
        templateUrl: 'views/ManageGamePage.html'

    }).when('/NewUserForm', {
        templateUrl: 'views/NewUserForm.html'
    })
            .when('/ScoreForm', {
                templateUrl: 'views/ScoreForm.html'
            });
});