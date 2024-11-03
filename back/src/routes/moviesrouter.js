const {Router} = require("express")
const movieController = require("../controllers/movieController.js")
const commentsController = require("../controllers/commentsController");
const { validateMovieForm } = require('../middlewares/validators.js');


const moviesRouter = Router()

moviesRouter.get ("/movies", movieController.getMovies);

moviesRouter.get("/movies/:id", movieController.getMovieById);

moviesRouter.post("/movies",validateMovieForm, movieController.postMovies);

moviesRouter.get ("/series", movieController.getSeries);

moviesRouter.get ("/actors", movieController.getActors);

moviesRouter.get("/:movieId", commentsController.getCommentsByMovieId);

// Ruta para agregar un comentario a una película
moviesRouter.post("/", commentsController.postComment);


module.exports = {
    moviesRouter
}