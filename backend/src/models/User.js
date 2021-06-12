const { Schema, model, SchemaTypes } = require('mongoose');

const userSchema = new Schema ({
  email: String,
  name: String,
  password: String,
  account:[{
    type: Schema.Types.ObjectId,
    ref: 'Account'
  }]
},{  
  timestamps: true
});

module.exports = model('User', userSchema);
