import Ember from 'ember';

export default Ember.Controller.extend({
  numDays: 365,
  logo: '/images/baby_wombat.jpg',
  time: function() {
    return (new Date()).toDateString()
  }.property(),
  day: function() {
    return ((new Date()).getDay() === (0 || 6) ? "Weekend" : "Weekday");
  }.property()
});
