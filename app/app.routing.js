app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<app-heroes></app-heroes>',
    })
    .state('heroes', {
      url: '/heroes',
      template: '<app-heroes></app-heroes>',
    })
    .state('dashboard', {
      url: '/dashboard',
      template: '<app-dashboard></app-dashboard>',
    })
    .state('detail', {
      url: '/detail/{id}',
      template: '<app-hero-detail></app-hero-detail>',
    });
    
  
  // // Remove # symbol from url
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

});