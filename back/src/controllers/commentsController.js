const commentsService = require("../services/commentsService");

module.exports = {
    getCommentsByMovieId: async (req, res) => {
        try {
            const { movieId } = req.params;
            const comments = await commentsService.getCommentsByMovieId(movieId);
            res.status(200).json(comments);
        } catch (error) {
            console.error("Error al obtener los comentarios:", error);
            res.status(500).json({ error: "Hubo un error al obtener los comentarios" });
        }
    },

    postComment: async (req, res) => {
        try {
            const { movieId, comment, stars } = req.body;
            const newComment = await commentsService.addComment({ movieId, comment, stars });
            res.status(201).json(newComment);
        } catch (error) {
            console.error("Error al agregar comentario:", error);
            res.status(500).json({ error: "Hubo un error al agregar el comentario" });
        }
    }
};