import angular from 'angular';
import Api from './api/api.service';
import Facebook from './facebook/facebook.service';
import Navbar from './navbar/navbar.component';
import Points from './points/points.service';
import User from './user/user.service';

export default angular.module('app.common', [
  Api,
  Facebook,
  Navbar,
  Points,
  User
]).name;
