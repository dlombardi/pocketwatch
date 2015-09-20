var scotchApp = angular.module('scotchApp', ['ui.router']);
var ref = new Firebase("https://tc-pocketwatch.firebaseio.com/");
var Locations = ref.child('tracked-locations');
var Users = ref.child('users');

scotchApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('#');
  $stateProvider
    .state('/', {
      url: '/home',
      templateUrl : 'pages/home.html',
      controller : 'mainController'
    })
    .state('/addLocations', {
      url: '/addLocations',
      templateUrl : 'pages/addLocations.html',
      controller : 'addLocationsController'
    })
});

scotchApp.controller('mainController', function($scope){
  $scope.message = "";
  $scope.login = function() {
    userData = {userData: [$scope.userName, $scope.userEmail]}
    Users.push(userData);
  }
});

scotchApp.controller('addLocationsController', function($scope, $http){

  $scope.message = "enter your location or the location of a person you care about to receive notifications when thy experience severe weather";
});
