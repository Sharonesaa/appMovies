const commentsService = require("../services/commentsService");

// Define las funciones correctamente
const getCommentsByMovieId = async (req, res) => {
    try {
        const { movieId } = req.params;
        const comments = await commentsService.getCommentsByMovieId(movieId);
        res.status(200).json(comments);
    } catch (error) {
        console.error("Error al obtener los comentarios:", error);
        res.status(500).json({ error: "Hubo un error al obtener los comentarios" });
    }
};

const postComment = async (req, res) => {
    const { movieId, comment, stars } = req.body; // Asegúrate de que estás extrayendo estos valores

    // Asegúrate de que estos valores no sean undefined
    if (!movieId || !comment || stars === undefined) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Aquí iría tu lógica para guardar el comentario en la base de datos

    res.status(201).json({ message: 'Comentario agregado exitosamente' });
};

module.exports = {
    postComment,
    getCommentsByMovieId
};
