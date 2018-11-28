app.component('appHeroes', {
  templateUrl: 'app/components/heroes/heroes.component.html',
  controller: heroesController
});

function heroesController($scope){
  // $scope.selectedHero = {}
  $scope.hero = {
    id: 1,
    name: 'Windstorm'
  };
  $scope.HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  $scope.onSelect = function(hero){
    $scope.selectedHero = hero
  }
};