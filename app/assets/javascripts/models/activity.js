// for more details see: http://emberjs.com/guides/models/defining-models/

Concertmatch.Activity = DS.Model.extend({
  activity:  DS.hasMany('activity')
});




  // info: DS.attr('string'),
  // events: DS.attr('string'),
  // artists: DS.attr('string'),
  // address: DS.attr('string'),
  // city: DS.attr('string'),
  // country: DS.attr('string'),
  // statecode: DS.attr('string'),