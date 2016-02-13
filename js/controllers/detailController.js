angular.module('emailApp')
    .controller('detailCtrl', ['$scope', 'EmailService', function($scope, EmailService){
        $scope.contacts = EmailService;
}])