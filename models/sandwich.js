const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeSchema = new Schema({
  sand: {
    type: String,
  }
}, {
  timestamps: true
});

const sandwichSchema = new Schema({
    name: String,
    state: {
      type: String,
      default: 'LA',
      enum:['LA','OK','TX','AR','MS']
    },
    types: [typeSchema],
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Sandwich', sandwichSchema);