const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body: String,
  date: {
    type: Date,
    default: Date.now
  },
  completed:{
    type: Boolean,
    default: false
  }

});



module.exports = Goal = mongoose.model("goal", goalSchema);;