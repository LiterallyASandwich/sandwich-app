const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sandwichSchema = new Schema({
    title: String,
    
  }, {
    timestamps: true
  });