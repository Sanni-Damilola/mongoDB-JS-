const mongoose = require("mongoose");

const schema = mongoose.Schema({
  Firstname: {
    type: String,
  },
  Lastname: {
    type: String,
  },
  Nameofpc: {
    type: String,
  },
  Complexion: {
    type: String,
  },
  Gender: {
    type: Boolean,
  },
  Phoneno: {
    type: Number,
  },
});

const model = mongoose.model("Set06data", schema);

module.exports = model;
