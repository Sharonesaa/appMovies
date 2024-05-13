const mongoose = require("mongoose")

const objectSchema = {
    title : String,
    overview : String,
    poster_path : String,
    media_type : String,
    seriedb_id : String, 
    backdrop_path : String,
}

const seriesSchema = new mongoose.Schema(objectSchema)

const Serie = mongoose.model("Serie", seriesSchema)


module.exports={
    Serie
}

fetch('https://api.themoviedb.org/3/trending/tv/day?language=es', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3NDg1ZWViYzU5NzcxOGU5NDZlOWZmZjkzODdkOCIsInN1YiI6IjY2MGExNzc2ZDZkYmJhMDE3ZDZmMTc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01K3zTQHhY6emHwdD0TAQoLyzEfXXasvWShbPvgTArI',
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    for (let serie of data.results) {
        Serie.create({
            title : serie.title ? serie.title : serie.name,
            overview : serie.overview ?serie.overview : serie.original_name,
            poster_path :serie.poster_path ? serie.poster_path : serie.profile_path,
            media_type : serie.media_type,
            moviedb_id : serie.id,
            backdrop_path : serie.backdrop_path

        })
    }
})
.catch(error => {
    console.error('Error en la solicitud:', error);
    throw new Error('Error en la solicitud'); // Lanza un error para manejarlo fuera de esta función
});
