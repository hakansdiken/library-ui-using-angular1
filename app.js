var app = angular.module('libraryApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/books');

    $stateProvider
        .state('auth', {
            abstract: true,
            templateUrl: 'app/features/auth/auth.html'
        })
        .state('auth.login', {
            url: '/login',
            templateUrl: 'app/features/auth/login/login.html',
            controller: 'LoginController',
            controllerAs: 'loginVm'
        })
        .state('auth.register', {
            url: '/register',
            templateUrl: 'app/features/auth/register/register.html',
            controller: 'RegisterController',
            controllerAs: 'registerVm'
        })
        .state('main', {
            abstract: true,
            templateUrl: 'app/features/main/main.html',
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
        })
        .state('admin', {
            abstract: true,
            url:'/admin',
            templateUrl: 'app/features/admin/admin.html',
        })
        .state('admin.books', {
            url: '/books',
            templateUrl: 'app/features/main/books/books.html',
            controller: 'BooksController',
            controllerAs: 'booksVm'
        })
        .state('admin.users', {
            url: '/users',
            templateUrl: 'app/features/main/users/users.html',
            controller: 'UsersController',
            controllerAs: 'usersVm'
        });
});
