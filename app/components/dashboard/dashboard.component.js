app.component('appDashboard', {
  templateUrl: 'app/components/dashboard/dashboard.component.html',
  controller: dashboardController
});

function dashboardController($scope, HeroService){
  $scope.HEROES = HeroService.getHeroes().slice(1, 5);
};