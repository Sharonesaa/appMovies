const mongoose = require("mongoose")

const objectSchema = {
    title : String,
    overview : String,
    poster_path : String,
    media_type : String,
    actordb_id : String, 
    backdrop_path : String,
}

const actorsSchema = new mongoose.Schema(objectSchema)

const Actor = mongoose.model("Actor", actorsSchema)


module.exports={
    Actor
}

