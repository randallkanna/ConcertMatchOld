Concertmatch.ActivitiesRoute = Ember.Route.extend({
  model: function() {
    return [{
      venue: "Ace of Spades",
      city: "Sacramento"
    }];
  }
});

// Concertmatch.ActivitiesRoute = Ember.Route.extend({
//   // model: function() {
//   //   return Concertmatch.Activity.find();
//   // }
// });


// return this.get('store').find('activities');