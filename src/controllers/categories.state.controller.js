(function () {
    'use-strict';

    angular.module('MenuApp')
        .controller('CategoriesStateController', CategoriesStateController);

    CategoriesStateController.$inject = ['MenuDataService'];

    function CategoriesStateController(MenuDataService) {
        let ctrl = this;

        MenuDataService.getAllCategories().then(function (result) {
            ctrl.categories = result;
        });
    }
})();