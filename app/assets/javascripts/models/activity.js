// for more details see: http://emberjs.com/guides/models/defining-models/

Concertmatch.Activity = DS.Model.extend({
  artists: DS.attr('string'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  country: DS.attr('string'),
  statecode: DS.attr('string'),
  name: DS.attr('string'),
});
