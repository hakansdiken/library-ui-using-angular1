app.controller('LoginController', function (AuthService, $state) {

    const vm = this;
    vm.user = { email: '', password: '' };

    vm.login = function () {
        AuthService.login(vm.user.email, vm.user.password)
            .then(res => {
                $state.go('main.books')
                console.log('Login success: ', res.data);
            })
            .catch(err => console.error('Error logging in: ', err));
    }
});