class LoginController {
  constructor(
    $state,
    api
  ) {
    this.$state = $state;
    this.api = api;
    this.loading = false;
  }
  login() {
    this.loading = true;
    this.api.login().then(() => {
      this.loading = false;
      this.$state.go('home');
    }).catch(() => {
      this.loading = false;
    });
  }
}

let Login = {
  bindings: {},
  template: require('./login.html'),
  controller: LoginController
};

export default angular.module('app.components.login.component', [
]).component('login', Login).name;
