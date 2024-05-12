const {Router} = require("express")
const router= Router()


const {moviesRouter} = require("./moviesrouter.js")

router.use("/",moviesRouter)

// router.use("/series",moviesRouter)

// router.use("/person",moviesRouter)

module.exports = {
    router
}