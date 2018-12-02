app.component('appHeroDetail', {
  templateUrl: 'app/components/hero-detail/hero-detail.component.html',
  controller: heroDetailController
});

function heroDetailController($scope, $stateParams, HeroService){
  $scope.heroId = $stateParams.id;
  $scope.hero = HeroService.getHero($scope.heroId);
};