var app = angular.module('libraryApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main/books');

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'app/features/main/main.html',
            abstract: true  // abstract: sadece layout, tek başına açılmaz
        })
        .state('main.books', {
            url: '/books',
            templateUrl: 'app/features/main/books/books.html',
            controller: 'BooksController',
            controllerAs: 'booksVm'
        })
        .state('main.users', {
            url: '/users',
            templateUrl: 'app/features/main/users/users.html',
            controller: 'UsersController',
            controllerAs: 'usersVm'
        });
});
