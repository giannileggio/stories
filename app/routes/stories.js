import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    let self = this;
    return $.getJSON('stories.json').then(
      function(response) {
        return response.stories;
        // debugger;
        // self.store.push(self.store.normalize('story', response.stories));
      }
    );
  }
});
