const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name: { type: String, maxLength: 250, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }
}, { collection: 'comments' });

// Export model
module.exports = mongoose.model("Comment", CommentSchema);