const express = require("express");
const commentsController = require("../controllers/commentsController");

const commentsRouter = express.Router();

// Ruta para obtener todos los comentarios de una película
commentsRouter.get("/:movieId", commentsController.getCommentsByMovieId);

// Ruta para agregar un comentario a una película
commentsRouter.post("/", commentsController.postComment);

module.exports = commentsRouter;