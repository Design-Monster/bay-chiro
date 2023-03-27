import EmberRouter from '@ember/routing/router';
import config from 'bay-chiro/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('services', function () {});
  this.route('visit', function () {});
  this.route('about', function () {});
  this.route('wrong-url', { path: '/*' }, function () {});
  this.route('policies', function () {});
});
