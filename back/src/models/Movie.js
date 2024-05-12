const mongoose = require("mongoose")

const objectSchema = {
    title : String,
    overview : String,
    poster_path : String,
    media_type : String,
    moviedb_id : String, 
    backdrop_path : String,
}

const moviesSchema = new mongoose.Schema(objectSchema)

const Movie = mongoose.model("Movie", moviesSchema)


module.exports={
    Movie
}

//fetch('https://api.themoviedb.org/3/trending/tv/day?language=es', {
//     method: 'GET',
//     headers: {
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3NDg1ZWViYzU5NzcxOGU5NDZlOWZmZjkzODdkOCIsInN1YiI6IjY2MGExNzc2ZDZkYmJhMDE3ZDZmMTc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01K3zTQHhY6emHwdD0TAQoLyzEfXXasvWShbPvgTArI',
//         'Content-Type': 'application/json'
//     }
// })
// .then(response => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
// })
// .then(data => {
//     for (let movie of data.results) {
//         Movie.create({
//             title : movie.title ? movie.title : movie.name,
//             overview : movie.overview ? movie.overview : movie.original_name,
//             poster_path : movie.poster_path ? movie.poster_path : movie.profile_path,
//             media_type : movie.media_type,
//             moviedb_id : movie.id,
//             backdrop_path : movie.backdrop_path

//         })
//     }
// })
// .catch(error => {
//     console.error('Error en la solicitud:', error);
//     throw new Error('Error en la solicitud'); // Lanza un error para manejarlo fuera de esta función
// });