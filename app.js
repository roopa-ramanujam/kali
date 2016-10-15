var app = angular.module('myApp', []);

app.controller('controller', function($scope) {
    $scope.userName;
    $scope.password;
    $scope.athlete;
    $scope.weight;
    $scope.feet;
    $scope.inches;
    function handleBtnClick(event) {
    event = event || window.event;
    var pressed = event.target.getAttribute("aria-pressed") == "true";
    //change the aria-pressed value as the button is toggled:
    event.target.setAttribute("aria-pressed", pressed ? "false" : "true");
    //... (perform the button's logic here)
  }

});