const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
  email: String,
  name: String,
  password: String
},{  
  timestamps: true
});

module.exports = model('User', userSchema);
