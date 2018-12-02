app.component('appHeroDetail', {
  templateUrl: 'app/components/hero-detail/hero-detail.component.html',
  controller: ['$window', '$scope', '$stateParams', 'HeroService', function heroDetailController($window, $scope, $stateParams, HeroService){
    $scope.heroId = $stateParams.id;
    $scope.hero = HeroService.getHero($scope.heroId);
    $scope.goBack = function(){
      $window.history.back();
    }
  }]
});