var serviceBase = 'http://test/frontend/web/';

yii2AngApp_film.factory("services", ['$http','$location','$route',
    function($http,$location,$route) {
        var obj = {};
        obj.getFilms = function(){
            return $http.get(serviceBase + 'films');
        };
        obj.createFilm = function (film) {
            return $http.post( serviceBase + 'films', film )
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $location.path('/film/index');
            }
            function errorHandler( result ){
                alert("Ошибка создания фильма");
                $location.path('/film/create')
            }
        };
        obj.getFilm = function(filmID){
            return $http.get(serviceBase + 'films/' + filmID);
        };

        obj.updateFilm = function (film) {
            return $http.put(serviceBase + 'films/' + film.id, film )
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $location.path('/film/index');
            }
            function errorHandler( result ){
                alert("Ошибка обновления фильма");
                $location.path('/film/update/' + film.id)
            }
        };
        obj.deleteFilm = function (filmID) {
            return $http.delete(serviceBase + 'films/' + filmID)
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $route.reload();
            }
            function errorHandler( result ){
                alert("Ошибка удаления фильма");
                $route.reload();
            }
        };
        return obj;
    }]);