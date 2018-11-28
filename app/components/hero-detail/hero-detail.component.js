app.component('appHeroDetail', {
  bindings: { hero: '<' },
  templateUrl: 'app/components/hero-detail/hero-detail.component.html',
  controller: heroDetailController
});

function heroDetailController($scope){};