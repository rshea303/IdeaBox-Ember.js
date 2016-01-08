import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ideas', { path: '/' });
  this.route('about');
  this.route('contact', { path: '/contact_us'})
});

export default Router;
