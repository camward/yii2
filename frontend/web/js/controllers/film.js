yii2AngApp_film.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/film/index', {
            templateUrl: 'views/film/index.html',
            controller: 'index'
        })
        .when('/film/create', {
            templateUrl: 'views/film/create.html',
            controller: 'create',
            resolve: {
                film: function(services, $route){
                    return services.getFilms();
                }
            }
        })
        .when('/film/update/:filmId', {
            templateUrl: 'views/film/update.html',
            controller: 'update',
            resolve: {
                film: function(services, $route){
                    var filmId = $route.current.params.filmId;
                    return services.getFilm(filmId);
                }
            }
        })
        .when('/film/delete/:filmId', {
            templateUrl: 'views/film/index.html',
            controller: 'delete'
        })
        .otherwise({
            redirectTo: '/film/index'
        });
}]);

yii2AngApp_film.controller('index', ['$scope', '$http', 'services',
        function($scope, $http, services) {
            services.getFilms().then(function(data){
                $scope.films = data.data;
            });
            $scope.deleteFilm = function(filmID) {
                if(confirm("Удалить запись с id = " + filmID)==true && filmID>0){
                    services.deleteFilm(filmID);
                    $route.reload();
                }
            };
        }])
    .controller('create', ['$scope', '$http', 'services','$location','film',
        function($scope, $http, services, $location, film) {
            $scope.createFilm = function(film) {
                var results = services.createFilm(film);
            }
        }])
    .controller('update', ['$scope', '$http', '$routeParams', 'services','$location','film',
        function($scope, $http, $routeParams, services, $location, film) {
            var original = film.data;
            $scope.film = angular.copy(original);
            $scope.isClean = function() {
                return angular.equals(original, $scope.film);
            };
            $scope.updateFilm = function(film) {
                var results = services.updateFilm(film);
            }
        }]);