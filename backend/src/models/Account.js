const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const userSchema = new Schema ({
  name_account: String,
  balance: Number
},{  
  timestamps: true
});

module.exports = model('Account', userSchema);



