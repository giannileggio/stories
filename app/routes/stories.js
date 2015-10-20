import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return $.getJSON('stories.json').then(
      function(response) {
        return response.stories;
      }
    );
  }
});
