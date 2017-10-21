import Api from './api/api.service';
import Facebook from './facebook/facebook.service';
import Navbar from './navbar/navbar.component';

export default angular.module('app.common', [
  Api,
  Facebook,
  Navbar
]).name;
