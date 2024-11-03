const { Comment } = require("../models/commentModel");

module.exports = {
    getCommentsByMovieId: async (movieId) => {
        try {
            const comments = await Comment.find({ movieId });
            return comments;
        } catch (error) {
            console.error("Error al buscar comentarios:", error);
            throw error;
        }
    },

    addComment: async ({ movieId, comment, stars }) => {
        try {
            const newComment = new Comment({ movieId, comment, stars });
            const savedComment = await newComment.save();
            return savedComment;
        } catch (error) {
            console.error("Error al agregar comentario:", error);
            throw error;
        }
    }
};
