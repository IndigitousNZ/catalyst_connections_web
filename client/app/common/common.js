import Api from './api/api.service';
import Facebook from './facebook/facebook.service';
import Navbar from './navbar/navbar.component';
import User from './user/user.service';

export default angular.module('app.common', [
  Api,
  Facebook,
  Navbar,
  User
]).name;
