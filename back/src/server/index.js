const express = require ("express");
const {router} = require ("../routes")
const app = express();
const cors = require ("cors");
const morgan = require ("morgan")

app.use(morgan("dev"))
app.use(cors())
app.use (express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

module.exports ={
    app
}