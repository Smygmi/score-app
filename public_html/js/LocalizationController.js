module.controller('Localization', function ($scope)
{
    $scope.navBarElements = navBarEnglishElements;
    $scope.creategameElements = createGameEnglishElements;
    $scope.joinGameElements = joinGameEnglishElements;
    $scope.profileElements = profileEnglishElements;
    $scope.manageGameElements = manageGameEnglishElements;

    $scope.selectLanguage = function (language) {
        switch (language) {
            case 1:
                $scope.navBarElements = navBarEnglishElements;
                $scope.creategameElements = createGameEnglishElements;
                $scope.joinGameElements = joinGameEnglishElements;
                $scope.profileElements = profileEnglishElements;
                $scope.manageGameElements = manageGameEnglishElements;

                break;

            case 2:
                $scope.navBarElements = navBarFinnishElements;
                $scope.creategameElements = creategameFinnishElements;
                $scope.joinGameElements = joinGameFinnishElements;
                $scope.profileElements = profileFinnishElements;
                $scope.manageGameElements = manageGameFinnishElements;

                break;

            case 3:
                $scope.navBarElements = navBarDutchElements;
                $scope.creategameElements = createGameDutchElements;
                $scope.joinGameElements = joinGameDutchElements;
                $scope.profileElements = profileDutchElements;
                $scope.manageGameElements = manageGameDutchElements;

                break;
        }
    };

});


var navBarFinnishElements = {
    CreateGameButton: 'Luo peli', JoinGameButton: 'Liity peliin', ManageGameButton: 'Hallinnoi pelejä', UserSettingsButton: 'Käyttäjätilin asetukset', LogInButton: 'Kirjaudu Sisään', LanguageButton: 'Kieli'
};

var navBarEnglishElements = {
    CreateGameButton: 'Create Game', JoinGameButton: 'Join Game', ManageGameButton: 'Manage Game', UserSettingsButton: 'User Settings', LogInButton: 'Log in', LanguageButton: 'Language'
};

var navBarDutchElements = {
    CreateGameButton: 'Wedstrijd aanmaken', JoinGameButton: 'Deelnemen aan wedstrijd', ManageGameButton: 'Beheer wedstrijd', UserSettingsButton: 'Instellingen', LogInButton: 'Inloggen', LanguageButton: 'Taal'
};


var creategameFinnishElements = {
    CreateRoomPageTitle: 'Luo pelihuone', GameRoomInputTitle: 'Pelihuoneen nimi', InfiniteLabel: 'Pysyvä tapahtuma',
    StartingDate: 'Alkaa', EndingDate: 'Loppuu', PrivateCheck: 'Yksityinen tapahtuma', MaxPlayers: 'Pelaajamaksimi',
    CreateSubmit: 'Luo', Add: '+ Lisää', Remove: 'Poista', CustomParameters: 'Lisälaskurit', ParameterName: 'Anna laskurin nimi',
    SuccessInfo: 'Pelihuone luotu onnistuneesti', NoTitleError: 'Anna pelihuoneelle nimi', NoStartingDateError: 'Anna kauden aloituspäivä tai aseta tapahtuma ikuiseksi',
    NoEndingDateError: 'Anna kauden lopetuspäivä tai aseta tapahtuma ikuiseksi', FalseEndingDateError: 'Lopetuspäivä tulee asettaa aloituspäivän jälkeen'
};
var createGameEnglishElements = {
    CreateRoomPageTitle: 'Create Game room', GameRoomInputTitle: 'Game room title', InfiniteLabel: 'Infinite event',
    StartingDate: 'Starting date', EndingDate: 'Ending date', PrivateCheck: 'Private event', MaxPlayers: 'Max players',
    CreateSubmit: 'Create', Add: '+ Add', Remove: 'Remove', CustomParameters: 'Custom Parameters', ParameterName: 'Give parameter name',
    SuccessInfo: 'Game room successfully created', NoTitleError: 'Game room must have a title', NoStartingDateError: 'Give a starting date or set event as infinite',
    NoEndingDateError: 'Give an ending date or set event as infinite', FalseEndingDateError: 'Ending date must be set after starting date'
};
var createGameDutchElements = {
    CreateRoomPageTitle: 'Wedstrijd aanmaken', GameRoomInputTitle: 'Gameroom naam', InfiniteLabel: 'Oneindig evenement',
    StartingDate: 'Begin datum', EndingDate: 'Eind datum', PrivateCheck: 'Besloten evenement', MaxPlayers: 'Maximaal antaal spelers',
    CreateSubmit: 'Aanmaken', Add: '+ toevoegen', Remove: 'Verwijderen', CustomParameters: 'Custom Parameters', ParameterName: 'Parameter naam',
    SuccessInfo: 'Wedstrijd succesvol aangemaakt', NoTitleError: 'Vul en titel in', NoStartingDateError: 'Vul startdatum in',
    NoEndingDateError: 'Vul einddatum in', FalseEndingDateError: 'Einddatum kan niet eerder zijn dan begindatum'
};

var manageGameFinnishElements = {
    ManagePageTitle: 'Hallinnoi Peliä', Players: 'Pelaajat', PlayerName: 'Pelaaja', Score: 'Pisteet', ReadyCheck: 'Valmis', Ready: 'Kyllä', startButtonText: 'Avaa huone'
};

var manageGameEnglishElements = {
    Players: 'Players', PlayerName: 'Player name', Score: 'Score', ReadyCheck: 'Ready check', Ready: 'Ready', startButtonText: 'Open the room'
};

var manageGameDutchElements = {
    Players: 'Spelers', PlayerName: 'Spelers naam', Score: 'Score', ReadyCheck: 'Gereed?', Ready: 'Gereed!', startButtonText: 'Begin wedstrijd'
};

var joinGameEnglishElements = {
    JoinGamePageTitle: 'Join Game', SearchGamesField: 'Search rooms', GameSelected: 'Game selected', PlayersInRoom: 'Players in room', MaximumPlayers: 'Max players'
};
var joinGameFinnishElements = {
    JoinGamePageTitle: 'Liity huoneeseen', SearchGamesField: 'Etsi huoneita', GameSelected: 'Valittu huone', PlayersInRoom: 'Pelaajia huoneessa', MaximumPlayers: 'Max pelaajat'
};
var joinGameDutchElements = {
    JoinGamePageTitle: 'Deelnemen aan wedstrijd', SearchGamesField: 'Zoek wedstrijd', GameSelected: 'Gameroom naam', PlayersInRoom: 'Spelers in de wedstridj', MaximumPlayers: 'Maximaal aantal spelers'
};

var profileEnglishElements = {
    profilePageTitle: 'Profile Page', interestTitle: 'Add games or sports you are interested in:', addInterest: 'Add', deleteInterest: 'Delete'
};
var profileFinnishElements = {
    profilePageTitle: 'Profiili', interestTitle: 'Lisää sinua kiinnostavat pelit ja lajit:', addInterest: 'Lisää', deleteInterest: 'Poista'
};
var profileDutchElements = {
    profilePageTitle: 'Profiel', interestTitle: 'Hobbies:', addInterest: '+Toevoegen', deleteInterest: 'Verwijderen'
};

var beginPageEnglishElement = {
    beginPageWelcome: 'Welcome to Score-App!', loginButtonText: 'Inloggen'
};
var beginPageFinnishElement = {
    beginPageWelcome: 'Tervetuloa Score-App -sovellukseen!', loginButtonText: 'Inloggen'
};
var beginPageDutchElement = {
    beginPageWelcome: 'Welkom bij de Scope-app', loginButtonText: 'Inloggen'
};