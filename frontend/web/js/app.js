var myApp = angular.module('myApp', [
    'ngRoute'
]);

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/site/index', {
                templateUrl: 'views/index.html',
                controller: 'index'
            })
            .when('/site/about', {
                templateUrl: 'views/about.html',
                controller: 'about'
            })
            .when('/site/contact', {
                templateUrl: 'views/contact.html',
                controller: 'contact'
            })
            .otherwise({
                redirectTo: '/site/index'
            });
    }]);

myApp.controller('index', ['$scope', '$http', function($scope, $http) {
        // Сообщение для отображения представлением
        $scope.message = 'Вы читаете главную страницу приложения. ';
    }])
    .controller('about', ['$scope', '$http', function($scope, $http) {
        // Сообщение для отображения представлением
        $scope.message = 'Это страница с информацией о приложении.';
    }])
    .controller('contact', ['$scope', '$http', function($scope, $http) {
        // Сообщение для отображения представлением
        $scope.message = 'Пишите письма. Мы будем рады!.';
    }]);