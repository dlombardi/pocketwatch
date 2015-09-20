app.controller('mainController', function($scope, loginService, pwConfig){

  $scope.createUser = function(){
    loginService.createAccount($scope.userEmail, $scope.userPassword, $scope.userName, $scope.userPhone);
  };

  $scope.login = function(){
    loginService.userLogin($scope.userLoginEmail, $scope.userLoginPassword);
  };
});

// {
  // email:$scope.userEmail,
  // password: $scope.userPassword,
  // username: $scope.userName,
  // phone: $scope.userPhone
// }
