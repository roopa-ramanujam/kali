var app = angular.module('myApp', []);

app.controller('controller', ['$scope', '$http', function($scope, $http) {
    $scope.userName;
    $scope.password;
    $scope.athlete;
    $scope.weight;
    $scope.feet;
    $scope.inches;
    $scope.height;
    $scope.preference;
    $scope.setPreference = function(preference) {
    	if (preference == "cardio") {
    		$scope.preference = "cardio";
    	}
    	if (preference == "strength") {
    		$scope.preference = "strength";
    	}
    }

    var obj = {
       "username" : $scope.userName,
       "type" : $scope.athlete,
       "weight" : $scope.weight,
       "goal" : $scope.goal,
       "height": $scope.height,
       "focus" : $scope.preference
   }

   var xmlhttp = new XMLHttpRequest();
   var url = "https://1cnsncaze3.execute-api.us-west-2.amazonaws.com/FINAL/getworkout";

   xmlhttp.open("GET", url, true);
   xmlhttp.send();
   $scope.workout = {};

    //get object returned by API call
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            $scope.workout = JSON.parse(this.responseText);
        }
    };
    }]);

