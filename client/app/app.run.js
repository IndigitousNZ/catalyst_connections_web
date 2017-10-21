/* @ngInject*/
export default function appRun(
  $rootScope, $window
) {
  $rootScope.user = {};

  $window.fbAsyncInit = () => {
    // Executed when the SDK is loaded
    FB.init({
      appId: '140673973240356',
      status: true,
      cookie: true,
      xfbml: true,
      version: 'v2.4'
    });

    $rootScope.$emit('facebook:loaded');
  };

  (function(d){
    // load the Facebook javascript SDK

    var js,
    id = 'facebook-jssdk',
    ref = d.getElementsByTagName('script')[0];

    if (d.getElementById(id)) {
      return;
    }

    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/sdk.js";

    ref.parentNode.insertBefore(js, ref);

  }(document));

}
