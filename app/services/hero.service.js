app.factory('HeroService', ['MessagesService', function(MessagesService){
  heroService = {};

  heroService.HEROES = [
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

  heroService.getHeroes = function(){
    MessagesService.add('HeroService: fetched heroes');
    return heroService.HEROES;
  }

  heroService.getHero = function(id){
    MessagesService.add('HeroService: fetched hero id=' + id);
    return heroService.HEROES.find(function(element){
      return element.id == id
    });
  }

  return heroService;
}]);