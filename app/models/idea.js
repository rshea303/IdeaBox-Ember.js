import DS from 'ember-data';

let Idea = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});

Idea.reopenClass({
  FIXTURES: [
    {id: 1, title: 'Idea 1', body: 'body for idea 1'},
    {id: 2, title: 'Idea 2', body: 'body for idea 2'}
  ]
})

export default Idea;
