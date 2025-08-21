app.service('AuthService', function ($http) {

    const API_BASE_URL = 'http://localhost:3000/api'

    this.login = function (email, password) {

        return $http.post(`${API_BASE_URL}/login`, { email: email, password: password }, { withCredentials: true })
    }

    this.register = function (userData) {
        return $http.post(`${API_BASE_URL}/register`, userData, { withCredentials: true });
    };

    this.logout = function () { 
        return $http.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true })
    }
});