(function () {
    'use-strict';

    angular.module('MenuApp')
        .controller('ItemsStateController', ItemsStateController);

    ItemsStateController.$inject = ['items'];

    function ItemsStateController(items) {
        let ctrl = this;

        ctrl.items = items;
    }
})();