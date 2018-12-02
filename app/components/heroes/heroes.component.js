app.component('appHeroes', {
  templateUrl: 'app/components/heroes/heroes.component.html',
  controller: heroesController
});

function heroesController($scope, $state, HeroService){
  $scope.HEROES = HeroService.getHeroes();
  $scope.selectedHero = null;
  $scope.onSelect = function(hero) {
    $scope.selectedHero = hero;
  }
  $scope.goTo = function(id) {
    $state.go('detail', {id: id});
  }
};