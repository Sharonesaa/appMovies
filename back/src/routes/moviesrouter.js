const {Router} = require("express")
const{movies} = require("../controllers/controllers.js")

const moviesRouter = Router()

moviesRouter.get ("/", movies)

module.exports = {
    moviesRouter
}