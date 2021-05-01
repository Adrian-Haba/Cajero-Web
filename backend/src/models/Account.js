const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
  name_account: String,
  balance: Number
},{  
  timestamps: true
});

module.exports = model('Account', userSchema);