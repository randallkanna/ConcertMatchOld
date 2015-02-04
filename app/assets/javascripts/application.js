//= require jquery
//= require jquery_ujs
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require ./concertmatch

Concertmatch = Ember.Application.create();






// Concertmatch.Activity = Ember.Object.extend();
// Concertmatch.Activity.reopenClass({
//   allActivities: [],
//   all: function(){
//     this.allActivities = [];
//     $.ajax({
//       url: 'http://api.jambase.com/events?zipCode=95128&page=0&api_key=rct6rka5zncmwnvz38srk36y&o=json',
//       dataType: 'jsonp',
//       context: this,
//       success: function(response){
//         response.data.forEach(function(activity){
//           this.allActivities.addObject(Concertmatch.Activity.create(activity))
//         }, this)
//       }
//     })
//     return this.allActivities;
//   }
// });



