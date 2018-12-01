app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<app-heroes></app-heroes>',
      // templateUrl: 'index.html',
    })
    .state('heroes', {
      url: '/heroes',
      template: '<app-heroes></app-heroes>',
    })
    .state('dashboard', {
      url: '/dashboard',
      template: '<app-dashboard></app-dashboard>',
    });
  
  // // Remove # symbol from url
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

});