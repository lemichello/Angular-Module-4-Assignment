(function () {
    'use-strict';

    angular.module('Data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];

    function MenuDataService($http) {
        let service = this;

        service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/categories.json")
            }).then(function (response) {
                return response.data;
            });
        };

        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
                params: {
                    category: categoryShortName
                }
            }).then(function (response) {
                return response.data.menu_items;
            });
        }
    }
})();