app.component('appMain', {
  templateUrl: 'app/app.component.html',
  controller: appController
});

function appController($scope){
  $scope.title = 'Heroes';
};