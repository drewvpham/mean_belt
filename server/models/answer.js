var mongoose = require("mongoose");

var AnswerSchema = new mongoose.Schema({
  answer: {
    type: String,
    minlength: [5, "Answer must be at least 5 characters long."],
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

}, { timestamps: true });

mongoose.model("Answer", AnswerSchema);
