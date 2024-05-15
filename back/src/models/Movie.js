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



  // Ruta para agregar una película
  
  
// fetch('https://api.themoviedb.org/3/trending/movie/day?language=es', {
//     method: 'GET',
//     headers: {
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3NDg1ZWViYzU5NzcxOGU5NDZlOWZmZjkzODdkOCIsInN1YiI6IjY2MGExNzc2ZDZkYmJhMDE3ZDZmMTc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01K3zTQHhY6emHwdD0TAQoLyzEfXXasvWShbPvgTArI',
//         'Content-Type': 'application/json'
//     }
// })

// .then(response => {
//       if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//   })
// .then(data => {

//   for (let movie of data.results){

//     fetch(`https://api.themoviedb.org/3/movie/${movie.id}?language=es`, {

//     method: 'GET',
//     headers: {
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3NDg1ZWViYzU5NzcxOGU5NDZlOWZmZjkzODdkOCIsInN1YiI6IjY2MGExNzc2ZDZkYmJhMDE3ZDZmMTc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01K3zTQHhY6emHwdD0TAQoLyzEfXXasvWShbPvgTArI',
//         'Content-Type': 'application/json'
//     }
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })

//     .then(movie => {
//       let mo = Movie.create({
//         title : movie.title ? movie.title : movie.name,
//         year : new Date(movie.release_date).getFullYear(),
//         director : movie.production_companies[0].name,
//         duration : movie.runtime,
//         rate : movie.vote_average,
//         genres : movie.genres.map(objeto => objeto.name),
//         overview : movie.overview ? movie.overview : movie.original_name,
//         poster : movie.poster_path ? movie.poster_path : movie.profile_path,
//         media_type : movie.media_type,
//         moviedb_id : movie.id,
//         backdrop : movie.backdrop_path
//     }) 
//     console.log (mo)

//     })

//   }

// })


// .catch(error => {
//     console.error('Error en la solicitud:', error);
//     throw new Error('Error en la solicitud'); // Lanza un error para manejarlo fuera de esta función
// });