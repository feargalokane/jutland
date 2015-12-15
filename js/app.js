angular.module('jutlandApp', ['ui.router', 'HomeController', 'GameController','TimelineSectionsController','TimelineSectionController','TimelineController','TimelineItemController','ngAnimate'])
  .run(function ($http, $rootScope) {
    $http.get('json/timeline_items.json').success(function (data) {
      $rootScope.timelineItems = data;
    });

    $http.get('json/timeline_sections.json').success(function (data) {
      $rootScope.timelineSections = data;
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('home', {
        cache: false,
        url: '/home',
        controller: 'HomeController',
        templateUrl: 'templates/home.html',
        onEnter: function(){
            angular.element(document.getElementsByTagName('body')[0]).addClass("front");
            angular.element(document.getElementsByTagName('body')[0]).removeClass("inner");      
        },        
        onExit: function(){
            angular.element(document.getElementsByTagName('body')[0]).removeClass("front");
            angular.element(document.getElementsByTagName('body')[0]).addClass("inner");   
        }        
      })
      .state('timelineSectionsHome', {
        url: '/timelineSectionsHome',
        templateUrl: 'templates/timeline_home.html',
        onEnter: function(){
            angular.element(document.getElementsByTagName('body')[0]).addClass("man");   
        },        
        onExit: function(){
            angular.element(document.getElementsByTagName('body')[0]).removeClass("man");   
        }      
      })
      .state('timelineSections', {
        url: '/timelineSections/:sectionId',
        templateUrl: 'templates/timeline_sections.html',
        controller:'TimelineSectionsController',
         onEnter: function($stateParams){
            angular.element(document.getElementsByTagName('body')[0]).addClass("early");   
        },        
        onExit: function($stateParams){
            angular.element(document.getElementsByTagName('body')[0]).removeClass("early");   
        }      
      })      
      .state('timelineSections.section', {
        url: '/section/:sectionId',
        templateUrl: 'templates/timeline_section.html',
        controller:'TimelineSectionController'
      })         
      .state('timeline', {
        url: '/timeline/:sectionId/:timelineId',
        templateUrl: 'templates/timeline.html',
        controller:'TimelineController',
         onEnter: function($stateParams){
            angular.element(document.getElementsByTagName('body')[0]).addClass("early");   
        },        
        onExit: function($stateParams){
            angular.element(document.getElementsByTagName('body')[0]).removeClass("early");   
        }      
      })
      .state('timeline.item', {
        url: '/timelineItem/:id',
        templateUrl: 'templates/timelineItem.html',
        controller:'TimelineItemController'
      })
      .state('game', {
        url: '/game',
        controller: 'GameController',
        templateUrl: 'templates/game.html'
      })
      .state('mazegame', {
        url: '/mazegame',
        templateUrl: 'templates/mazegame.html',
        controller: 'GameController',
      });
    $urlRouterProvider.otherwise('/home');
  });

function getObjects(obj, key, val) {
  var objects = [];
  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    if (typeof obj[i] == 'object') {
      objects = objects.concat(getObjects(obj[i], key, val));
    } else
      //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
      if (i == key && obj[i] == val || i == key && val == '') { //
        objects.push(obj);
      } else if (obj[i] == val && key == '') {
        //only add if the object is not already in the array
        if (objects.lastIndexOf(obj) == -1) {
          objects.push(obj);
        }
      }
  }
  return objects;
}

//return an array of values that match on a certain key
function getValues(obj, key) {
  var objects = [];
  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    if (typeof obj[i] == 'object') {
      objects = objects.concat(getValues(obj[i], key));
    } else if (i == key) {
      objects.push(obj[i]);
    }
  }
  return objects;
}

//return an array of keys that match on a certain value
function getKeys(obj, val) {
  var objects = [];
  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    if (typeof obj[i] == 'object') {
      objects = objects.concat(getKeys(obj[i], val));
    } else if (obj[i] == val) {
      objects.push(i);
    }
  }
  return objects;
}