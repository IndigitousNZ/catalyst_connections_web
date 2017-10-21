class Api {
    constructor(
      $http, $log, $window,
      apollo,
      facebook
    ) {
      this.$http = $http;
      this.$log = $log;
      this.$window = $window;
      this.apollo = apollo;
      this.facebook = facebook;
    }

    query(gql) {
      return this.apollo.query({
        query: gql
      }).then((data) => {
        this.$log.log(gql, data.data);
        return data.data;
      });
    }

    mutate(gql, variables) {
      console.log(variables);
      return this.apollo.mutate({
        mutation: gql,
        variables: variables
      }).then((data) => {
        this.$log.log(gql, variables, data.data);
        return data.data;
      });
    }

    authenticate() {
      return this.facebook.authenticate().then((accessToken) => {
        return this.getAccessToken(accessToken);
      });
    }

    login() {
      return this.facebook.login().then((accessToken) => {
        return this.getAccessToken(accessToken);
      });
    }

    logout() {
      return this.facebook.logout().then((accessToken) => {
        this.$window.localStorage.removeItem('accessToken');
      });
    }

    getAccessToken(accessToken) {
      return this.$http.post('https://catalyst-connections-api.herokuapp.com/oauth/token', {
        client_id: '1097aa8c036d1e61dffb20641f31d26f6f5775e826bd88fe6b1de3d82fc824f3',
        client_secret: '8493a8d702bd0677bcc9db46d324f287c39be46b066b1417f7afcbec948d5ac0',
        assertion: accessToken,
        grant_type: 'assertion'
      }).then((response) => {
        this.$window.localStorage.setItem('accessToken', response.data.access_token);
        return response.data.access_token;
      });
    }
}

export default angular.module('app.common.api.service', [
]).service('api', Api).name;
