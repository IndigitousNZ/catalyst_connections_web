class UserController {
  constructor(
    $state,
    user
  ) {
    this.$state = $state;
    this.user = user;
  }

  $onInit() {
    this.user.load(true);
  }

  save() {
    this.user.updateUser(this.user.data).then((data) => {
      this.$state.go('points');
    });
  }

  workplace() {
    this.$state.go('workplace');
  }
}

let User = {
  bindings: {},
  template: require('./user.html'),
  controller: UserController
};

export default angular.module('app.components.user.component', [
]).component('user', User).name;
