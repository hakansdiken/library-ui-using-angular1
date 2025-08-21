app.controller('UsersController', function (UsersService) {
    const vm = this;
    vm.users = [];
    vm.user = { name: '', surname: '', email: '', password: '', role: '' };
    vm.roles = ["Admin", "Librarian", "Member"];

    vm.viewMode = true;

    function loadUsers() {
        UsersService.getUsers()
            .then(response => {
                vm.users = response.data.data;
            })
            .catch(error => console.error('An error occured while loading users: ', error))
    }
    loadUsers();

    vm.addUser = function () {
        UsersService.createUser(vm.user)
            .then(res => {

                vm.user = {};
                vm.viewMode = true;
                loadUsers();
            })
            .catch(error => console.error('An error occured while creating users: ', error));
    };

    vm.deleteUser = function (id) {

        UsersService.deleteUser(id)
            .then(response => {

                loadUsers();
            })
            .catch(error => {

                console.error('An error occured while deleting user: ', error)
            })
    }

    vm.showForm = function () {

        vm.viewMode = false;
    }

    vm.cancelForm = function () {

        vm.viewMode = true;
        vm.user = {}
    }
});
