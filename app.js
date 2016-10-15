var app = angular.module('myApp', []);

app.controller('controller', function($scope) {
    $scope.userName;
    $scope.password;
    $scope.heightInFeet = ["4", "5", "6", "7"];
    $scope.heightInInches = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    $scope.selectedHeightInFeet;
    $scope.selectedHeightInInches;
    $scope.alert = function() {
    	alert($scope.userName);
    }
});