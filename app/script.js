angular.module('app',['ngRoute']).
  config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when('/main', {
        controller: 'appController',
        templateUrl: 'main.html'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }]).
  controller('appController', ['$scope', function($scope){
    $scope.view = 'list.html';
    $scope.data = [{
      leagueGame: '1. Champion: Fiora. Killed fitty men'
    }, {
      leagueGame: '2. Champion: Chogath. Killed fitty men'  
    }, {
      leagueGame: '3. Champion: Ahri. Killed fitty men' 
    }, {
      leagueGame: '4. Champion: Fiora. Killed fitty men' 
    }, {  
      leagueGame: '5. Champion: Fiora. Killed fitty men' 
    }, {  
      leagueGame: '6. Champion: Vlad. Killed fitty men' 
    }, {  
      leagueGame: '7. Champion: Fiora. Killed fitty men' 
    }, {  
      leagueGame: '8. Champion: Teemo. Killed fitty men' 
    }, {
      leagueGame: '9. Champion: Fiora. Killed fitty men' 
    }, {
      leagueGame: '10. Champion: Mario. Killed fitty men'      
    }, {
      leagueGame: '11. Champion: Fiora. Killed fitty men'      
    }, {
      leagueGame: '12. Champion: Zombie. Killed fitty men' 
    }];
  }]).
  
  directive('appView', function() {
    return {
      scope: {
        view: '=appView'
      },
      replace: true,
      template: '<nav class="navbar navbar-default">' +
                    '<div class="container">' +
                      'Enter Summoner Name ' +
                      '<br />' +
                      '<input id="userName" />' +
                      '<input type="submit" onclick="summonerLookUp();" />' +
                      '<br />Summoner Level: <span id="sLevel"></span>' +
                      '<br />Summoner ID: <span id="sID"></span>' +
                        '<ul class="nav navbar-nav navbar-right">' +
                        '<li ng-repeat="v in views" ng-bind="v.name" ng-class="v.icon" ng-click="switchView(v)"></li>' +
                      '</ul>' +
                    '</div>' +
                '</nav>',
      link: function(scope, el, attr) {
        scope.views = [{
          name: 'List',
          template: 'list.html',
          icon: 'btn btn-default navbar-btn glyphicon glyphicon-th-list'
        }, {
          name: 'Grid',
          template: 'grid.html',
          icon: 'btn btn-default navbar-btn glyphicon glyphicon-th'
        }];
      },
      controller: ['$scope', function($scope){
        $scope.switchView = function(view) {
          $scope.view = view.template;
        }
      }]
    }
  });