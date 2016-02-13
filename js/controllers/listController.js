angular.module('emailApp')
    .controller('listCtrl', ['$scope', 'EmailService', function ($scope, EmailService) {
        $scope.searchText = null;
        $scope.searchColumn = 'email';
        $scope.contacts = EmailService;

        $scope.mySearch = function (person) {
            if ($scope.searchText) {
                return person[$scope.searchColumn].indexOf($scope.searchText) != -1;
            }
            return true;
        }

    }])