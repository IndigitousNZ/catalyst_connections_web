class ProfileController {
  constructor(
    $state,
    users
  ) {
    this.$state = $state;
    this.users = users;
  }

  $onInit() {
    this.users.load(true);
  }

  save() {
    this.users.updateUser(this.users.data).then((data) => {
      this.$state.go('points');
    });
  }
}

let Profile = {
  bindings: {},
  template: require('./profile.html'),
  controller: ProfileController
};

export default angular.module('app.components.profile.component', [
]).component('profile', Profile).name;
