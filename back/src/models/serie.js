const mongoose = require("mongoose")

const objectSchema = {
    title : String,
    year : Number,
    director: String,
    overview : String,
    duration : Number,
    rate : Number,
    genres :Array,
    poster : String,
    media_type : String,
    moviedb_id : String, 
    backdrop : String,
}

const seriesSchema = new mongoose.Schema(objectSchema)

const Serie = mongoose.model("Serie", seriesSchema)


module.exports={
    Serie
}

