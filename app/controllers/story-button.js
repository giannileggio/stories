import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    alertTitle: function() {
      alert('yo!');
    }
  }
});
