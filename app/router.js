import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about-us');
  this.route('register');
  this.route('product');
  this.route('productdetails',{path:"/productdetails/:id"});
  this.route('newcomponent');
});

export default Router;
