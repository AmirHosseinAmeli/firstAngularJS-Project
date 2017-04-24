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
        console.log($scope.forms.teamForm);
        if ($scope.forms.teamForm.$valid) {
            var data = {name: $scope.teamName, members: $scope.members};
            console.log(data)
            $http.post('http://127.0.0.1:8000/create_team/', data)
                .success(function (data) {
                    $scope.PostDataResponse = data;
                })
                .error(function (err) {
                });
        }
    };
});
