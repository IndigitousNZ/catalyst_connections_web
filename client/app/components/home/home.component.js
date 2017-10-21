class HomeController {
}

let Home = {
  bindings: {},
  template: require('./home.html'),
  controller: HomeController
};

import users from 'common/users/users.service';

export default angular.module('app.components.home.component', [
  users
]).component('home', Home).name;
