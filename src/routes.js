(function () {
    'use-strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/states/home.state.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/states/categories.state.html',
                controller: 'CategoriesStateController as ctrl'
            })
            .state('items', {
                url: '/items/{category}',
                templateUrl: 'src/states/items.state.html',
                controller: 'ItemsStateController as ctrl',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.category);
                    }]
                }
            })
    }
})();