import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return $.getJSON('stories.json', function(data){
      console.log(data.stories[0].title);
      return data.stories;
    });
  }
});
