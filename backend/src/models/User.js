const { Schema, model, SchemaTypes } = require('mongoose');

const userSchema = new Schema ({
  email: String,
  name: String,
  password: String,
  account: Array
},{  
  timestamps: true
});

module.exports = model('User', userSchema);
