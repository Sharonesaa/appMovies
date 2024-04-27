const {Router} = require("express")
const router = Router()

const {moviesRouter} = require("./moviesrouter.js")

router.use("/movies",moviesRouter)

module.exports = {
    router
}