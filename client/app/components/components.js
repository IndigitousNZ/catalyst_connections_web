import Home from './home/home.component';
import Login from './login/login.component';
import Points from './points/index.module';
import Profile from './profile/profile.component';
import Root from './root/root.component';
import Workplace from './workplace/index.module';

export default angular.module('app.components', [
  Home,
  Login,
  Points,
  Profile,
  Root,
  Workplace
]).name;
