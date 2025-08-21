app.controller('RegisterController', function (AuthService) {

    const vm = this;
    vm.user = { name: '', surname: '', email: '', password: '' };
    
    vm.register = function () {
        AuthService.register(vm.user)
            .then(res => {

                console.log('User created: ', res.data);
                vm.user = { name: '', surname: '', email: '', password: '' };
            })
            .catch(err => console.error('Error registering: ', err));
    }
})