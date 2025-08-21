app.controller('BooksController', function (BooksService) {

    const vm = this;
    vm.viewMode = true;
    vm.books = [];
    vm.book = { title: '', author: '', description: '', publisher: '', publicationYear: '', pageCount: '', isbn: '', deweyCode: '', isBorrowed: false }

    function loadBooks() {
        BooksService.getBooks()
            .then(response => {

                vm.books = response.data.data;
                console.log(response.data.data)
            })
            .catch(error => {
                console.error('An error occurred loading books: ', error);
            });
    }
    loadBooks();

    vm.addBook = function () {

        BooksService.createBook(vm.book)
            .then(response => {
                loadBooks();
                vm.viewMode = true
            })
            .catch(error => console.error('An error occurred creating books: ', error));
    }

    vm.deleteBook = function (id) {

        BooksService.deleteBook(id)
            .then(response => {
                loadBooks();
            })
            .catch(error => console.error('An error occurred deleting books: ', error));
    }

    vm.showForm = function () {

        vm.viewMode = false;

    }

    vm.cancelForm = function () {

        vm.viewMode = true;
        vm.book = {}
    }
});