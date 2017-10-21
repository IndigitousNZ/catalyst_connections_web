class NavbarController {
  constructor(
  ) {
  }
  $onInit() {
  }
}

let Navbar = {
  bindings: {},
  template: require('./navbar.html'),
  controller: NavbarController
};

export default angular.module('app.common.navbar.component', [
]).component('navbar', Navbar).name;
