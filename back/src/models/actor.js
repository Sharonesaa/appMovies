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

// fetch('https://api.themoviedb.org/3/trending/person/day?language=es', {
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
//     for (let actor of data.results) {
//         Actor.create({
//             title : actor.title ? actor.title : actor.name,
//             overview : actor.overview ? actor.overview : actor.original_name,
//             poster_path : actor.poster_path ? actor.poster_path : actor.profile_path,
//             media_type : actor.media_type,
//             Actordb_id : actor.id,
//             backdrop_path : actor.backdrop_path

//         })
//     }
// })
// .catch(error => {
//     console.error('Error en la solicitud:', error);
//     throw new Error('Error en la solicitud'); // Lanza un error para manejarlo fuera de esta función
// });

