import Home from './home/home.component';
import Login from './login/login.component';
import Points from './points/index.module';
import Root from './root/root.component';
import User from './user/user.component';
import Workplace from './workplace/index.module';

export default angular.module('app.components', [
  Home,
  Login,
  Points,
  Root,
  User,
  Workplace
]).name;
