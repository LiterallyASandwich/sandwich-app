const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const factSchema = new Schema({
    content: {
      type: String,
    }
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Fact', factSchema);
