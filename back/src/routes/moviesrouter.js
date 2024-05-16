const {Router} = require("express")
const movieController = require("../controllers/movieController.js")
const { validateMovieForm } = require('../middlewares/validators.js');


const moviesRouter = Router()

moviesRouter.get ("/movies", movieController.getMovies);

moviesRouter.get("/movies/:id", movieController.getMovieById);

moviesRouter.post("/movies",validateMovieForm, movieController.postMovies);

moviesRouter.get ("/series", movieController.getSeries);

moviesRouter.get ("/actors", movieController.getActors);


module.exports = {
    moviesRouter, 
}