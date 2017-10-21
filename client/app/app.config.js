import Routes from './routes';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

/* @ngInject*/
export default function appConfig(
  apolloProvider, $stateProvider, $locationProvider, $windowProvider, $mdThemingProvider
) {
  const $window = $windowProvider.$get();
  $locationProvider.html5Mode({
    enabled: true,
    rewriteLinks: false
  }).hashPrefix('!');

  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('grey', {
      'default': '200'
    });

  const networkInterface = createNetworkInterface({
    uri: 'https://catalyst-connections-api.herokuapp.com/graphql'
  });

  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }
      req.options.headers['authorization'] = `Bearer ${$window.localStorage.getItem('accessToken')}`
      next();
    }
  }]);

  const client = new ApolloClient({
    networkInterface
  });
  apolloProvider.defaultClient(client);

  Routes.config($stateProvider);
}
