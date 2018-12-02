app.component('appMain', {
  templateUrl: 'app/app.component.html',
  controller: ['$scope', function appController($scope){
    $scope.title = 'Heroes';
  }]
});