const mongoose = require("mongoose")

const objectSchema = {
    title: String,
    rate : Number,
    overview : String,
    poster : String,
    moviedb_id : Number,
    backdrop : String
}

const actorsSchema = new mongoose.Schema(objectSchema)

const Actor = mongoose.model("Actor", actorsSchema)



module.exports={
    Actor
}

