Concertmatch.ActivitiesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('activity');
  }
});

//

// return this.store.find('activity');
// return Concertmatch.Activity.all();

// // Fake data:

 // model: function() {
 //    return [{
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //    {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //    {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //    {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //    {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //    {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //    {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //        {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //            {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //            {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //            {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //            {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //            {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //            {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //            {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //            {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //            {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //            {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //            {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //            {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    },
 //    {
 //      title: "Rockin Twenties",
 //      venue: "Ace of Spades",
 //      city: "Sacramento",
 //      state: "CA",
 //      zipcode: "95819"
 //    }

 //    ];
 //  }