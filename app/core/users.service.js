app.service('UsersService', function ($http) {

    const API_BASE_URL = 'http://localhost:3000/api'

    this.getUsers = function () {

        return $http.get(`${API_BASE_URL}/users`, { withCredentials: true });
    }

    this.getUserById = function (id) {

        return $http.get(`${API_BASE_URL}/users/${id}`, { withCredentials: true });
    }

    this.createUser = function (userData) {

        return $http.post(`${API_BASE_URL}/users`, userData, { withCredentials: true });
    }

    this.deleteUser = function (id) {
        
        return $http.delete(`${API_BASE_URL}/users/${id}`, { withCredentials: true });
    }
})