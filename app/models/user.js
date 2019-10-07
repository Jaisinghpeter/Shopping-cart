import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  email: attr('string'),
  username: attr('string'),
  password: attr('string'),
  usertype:attr('boolean')
});
