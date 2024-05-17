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

const moviesSchema = new mongoose.Schema(objectSchema)

const Movie = mongoose.model("Movie", moviesSchema)


module.exports={
    Movie
}



