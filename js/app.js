angular.module('jutlandApp', ['ui.router', 'HomeController', 'GameController', 'TimelineSectionsController', 'TimelineSectionController', 'TimelineController', 'TimelineItemController', 'ngAnimate'])
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
        onEnter: function () {
          addBodyClasses(["front"]);
          removeBodyClasses(["inner"]);
        },
        onExit: function () {
          addBodyClasses(["inner"]);
          removeBodyClasses(["front"]);
        }
      })
      .state('timelineSectionsHome', {
        cache: false,
        url: '/timelineSectionsHome',
        templateUrl: 'templates/timeline_home.html',
        onEnter: function () {
          addBodyClasses(["section", "section-1"]);
        },
        onExit: function () {
          removeBodyClasses(["section", "section-1"]);
        }
      })
      .state('timelineSections', {
        cache: false,
        url: '/timelineSections/:sectionId',
        templateUrl: 'templates/timeline_sections.html',
        controller: 'TimelineSectionsController',
        onEnter: function ($stateParams) {
          addBodyClasses(["category", "section-1"]);
        },
        onExit: function ($stateParams) {
          removeBodyClasses(["category", "section-1"]);
        }
      })
      .state('timelineSections.section', {
        cache: false,
        url: '/section/:sectionId',
        templateUrl: 'templates/timeline_section.html',
        controller: 'TimelineSectionController',
        onEnter: function ($stateParams) {
          addBodyClasses(["category-" + $stateParams.sectionId]);
        },
        onExit: function ($stateParams) {
          removeBodyClasses(["category-" + $stateParams.sectionId]);
        }
      })
      .state('timeline', {
        cache: false,
        url: '/timeline/:sectionId/:timelineId',
        templateUrl: 'templates/timeline.html',
        controller: 'TimelineController',
        onEnter: function ($stateParams) {
          addBodyClasses(["category", "item", "category-" + $stateParams.sectionId]);
        },
        onExit: function ($stateParams) {
          removeBodyClasses(["category", "item", "category-" + $stateParams.sectionId]);

        }
      })
      .state('timeline.item', {
        cache: false,
        url: '/timelineItem/:id',
        templateUrl: 'templates/timelineItem.html',
        controller: 'TimelineItemController',
        onEnter: function ($stateParams) {
          addBodyClasses(["item-" + $stateParams.id]);
        },
        onExit: function ($stateParams) {
          removeBodyClasses(["item-" + $stateParams.id]);

        }
      })
      .state('game', {
        cache: false,
        url: '/game',
        controller: 'GameController',
        templateUrl: 'templates/game.html',
        onEnter: function ($stateParams) {
          addBodyClasses(["section-3"]);
        },
        onExit: function ($stateParams) {
          removeBodyClasses(["section-3"]);

        }
      })
      .state('mazegame', {
        cache: false,
        url: '/mazegame',
        templateUrl: 'templates/mazegame.html',
        controller: 'GameController',
        onEnter: function ($stateParams) {
          addBodyClasses(["section-3"]);
        },
        onExit: function ($stateParams) {
          removeBodyClasses(["section-3"]);

        }
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

function addBodyClasses(classItems) {
  for (var i = 0, tot = classItems.length; i < tot; i++) {
    angular.element(document.getElementsByTagName('body')[0]).addClass(classItems[i]);
  }
}

function removeBodyClasses(classItems) {
  for (var i = 0, tot = classItems.length; i < tot; i++) {
    angular.element(document.getElementsByTagName('body')[0]).removeClass(classItems[i]);
  }
}