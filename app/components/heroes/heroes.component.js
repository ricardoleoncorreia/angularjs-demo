app.component('appHeroes', {
  templateUrl: 'app/components/heroes/heroes.component.html',
  controller: heroesController
});

function heroesController($scope, HeroService){
  $scope.HEROES = HeroService.getHeroes();
  $scope.onSelect = function(hero){
    $scope.selectedHero = hero;
  }
};