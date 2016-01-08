import Ember from 'ember';

export default Ember.Controller.extend({
  numDays: 365,
  logo: '/images/baby_wombat.jpg',
  time: function() {
    return (new Date()).toDateString()
  }.property()
});
