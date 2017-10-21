class Facebook {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
  }
  authenticate() {
    return new Promise((resolve, reject) => {
      this.$rootScope.$on('facebook:loaded', () => {
        FB.getLoginStatus((response) => {
          if (response.status === 'connected') {
            return resolve(response.authResponse.accessToken);
          } else {
            return reject();
          }
        });
      });
    });
  }

  login() {
    return new Promise((resolve, reject) => {
      FB.login((response) => {
        if (response.status === 'connected') {
          return resolve(response.authResponse.accessToken);
        } else {
          return reject();
        }
      });
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      FB.logout((response) => {
        return resolve();
      });
    });
  }
}

export default angular.module('app.common.facebook.service', [
]).service('facebook', Facebook).name;
