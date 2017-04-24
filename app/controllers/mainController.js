angular.module("teams").controller("TeamCtrl", function ($scope, $http) {
    $scope.forms = {};
    $scope.members = [];
    $scope.add = function () {
        $scope.members.push({
            username: "",
            display_name: ""
        });
    }


    $scope.SendData = function () {
        if ($scope.forms.teamForm.$valid) {
            var data = {name: $scope.teamName, members: $scope.members};
            $http.post('http://127.0.0.1:8000/create_team/', data)
                .success(function () {
                    $scope.correctSend = "Data Send";
                    $scope.wrongSend= null;
                })
                .error(function (err) {
                    $scope.correctSend = null;
                    $scope.wrongSend= "Error in Sending";
                });
        }
    };
});
