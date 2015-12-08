angular.module('jutlandApp', ['ui.router','HomeController'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    cache:false,
    url: '/home',
    controller: 'HomeController',
    templateUrl: 'templates/home.html'
  }) 
  .state('game', {
    url: '/game',
    templateUrl: 'templates/game.html',
    controller: 'GameController'
  })
  .state('mazegame', {
    url: '/mazegame',
    templateUrl: 'templates/mazegame.html',
    controller: 'GameController',     
  });  
  $urlRouterProvider.otherwise('/home');
});