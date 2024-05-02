const {Router} = require("express")
const movieController = require("../controllers/movieController.js")

const moviesRouter = Router()

moviesRouter.get ("/movies", movieController.getMovies);

moviesRouter.get ("/series", movieController.getSeries);

moviesRouter.get ("/person", movieController.getPerson);


module.exports = {
    moviesRouter, 
}