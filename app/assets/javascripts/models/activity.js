// for more details see: http://emberjs.com/guides/models/defining-models/

Concertmatch.Activity = DS.Model.extend({
  title: DS.attr('string'),
  artist: DS.attr('string'),
  streetAddress: DS.attr('string'),
  zipCode: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  country: DS.attr('string'),
  date: DS.attr('string'),
  description: DS.attr('string')
});
