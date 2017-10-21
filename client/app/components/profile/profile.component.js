class ProfileController {
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
    alert('lol');
    this.$state.go('workplace');
  }
}

let Profile = {
  bindings: {},
  template: require('./profile.html'),
  controller: ProfileController
};

export default angular.module('app.components.profile.component', [
]).component('profile', Profile).name;
