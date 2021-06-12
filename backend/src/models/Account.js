const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const accountSchema = new Schema ({
  name_account: String,
  balance: Number,
  user:{ type: mongoose.Schema.Types.ObjectId, ref: "User" }
},{  
  timestamps: true
});

module.exports = model('Account', accountSchema);



