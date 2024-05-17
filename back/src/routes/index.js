const {Router} = require("express")
const router= Router()


const {moviesRouter} = require("./moviesrouter.js")

router.use("/",moviesRouter)

router.use("/series",moviesRouter)

router.use("/actors",moviesRouter)



module.exports = {
    router
}