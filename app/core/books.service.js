app.service('BooksService', function ($http) {

    const API_BASE_URL = 'http://localhost:3000/api'

    this.getBooks = function () {

        return $http.get(`${API_BASE_URL}/books`, { withCredentials: true });
    }

    this.getBookById = function (id) {

        return $http.get(`${API_BASE_URL}/books/${id}`, { withCredentials: true });
    }

    this.createBook = function (bookData) {

        return $http.post(`${API_BASE_URL}/books`, bookData, { withCredentials: true });
    }

    this.updateBook = function (id, bookData) {

        return $http.put(`${API_BASE_URL}/books/${id}`, bookData, { withCredentials: true });
    }
    
    this.deleteBook = function (id) {

        return $http.delete(`${API_BASE_URL}/books/${id}`, { withCredentials: true });
    }
});