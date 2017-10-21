class HomeController {
}

let Home = {
  bindings: {},
  template: require('./home.html'),
  controller: HomeController
};

import user from 'common/user/user.service';

export default angular.module('app.components.home.component', [
  user
]).component('home', Home).name;
