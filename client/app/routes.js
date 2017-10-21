export default class Routes {
    static config($stateProvider) {
        $stateProvider.state({
            name: 'root',
            abstract: true,
            component: 'root'
        }).state({
            name: 'home',
            title: 'Home',
            url: '/',
            component: 'home',
            parent: 'root'
        }).state({
            name: 'profile',
            title: 'Profile',
            url: '/profile',
            component: 'profile',
            parent: 'root',
            params: {
              navbar: false
            }
        }).state({
            name: 'workplace',
            title: 'Workplace',
            url: '/workplace',
            component: 'workplace',
            parent: 'root',
            params: {
              navbar: false
            }
        }).state({
            name: 'points',
            title: 'Points of Interest',
            url: '/points',
            component: 'points',
            parent: 'root'
        }).state({
            name: 'login',
            title: 'Login',
            url: '/login',
            component: 'login',
        }).state({
            name: 'logout',
            title: 'Logout',
            url: '/logout',
            onEnter: logout
        })
    }
}

/* @ngInject*/
function logout(
    $state,
    user
) {
    user.logout().then(() => {
      $state.go('login');
    });
}
