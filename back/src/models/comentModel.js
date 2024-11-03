const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    comment: { type: String, required: true },
    stars: { type: Number, min: 1, max: 5, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };