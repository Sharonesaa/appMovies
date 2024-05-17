const {Movie} = require ("../models/movie.js")

const {Serie} = require("../models/serie.js")

const {Actor} = require("../models/actor.js")

module.exports = {
    getAllMovies: async() => {
        try {
            const movies = await Movie.find();
            return movies;
        } catch (error) {
            console.error("Error al buscar películas:", error);
            throw error; // Lanza el error para que sea manejado por el controlador
        }
    },
    
    postAllMovies : async (formData) => { // Acepta formData como argumento
        try {
            const newMovie = new Movie({
                title: formData.title,
                year: formData.year,
                director : formData.director,
                poster: formData.poster,
                genres: formData.genres,
                overview: formData.overview,
                backdrop: formData.backdrop,
                duration : formData.duration,
                rate : formData.rate,
            });
    
            const savedMovie = await newMovie.save();
            return savedMovie; // Devuelve la película guardada
        } catch (error) {
            console.error('Error al agregar película:', error);
            throw error;
        }
    },
    

    getAllSeries: async() => {
        try {
            const series = await Serie.find();
            return series;
        } catch (error) {
            console.error("Error al buscar películas:", error);
            throw error; // Lanza el error para que sea manejado por el controlador
        }
    },

    getAllActors: async() => {
        try {
            const actors = await Actor.find();
            return actors;
        } catch (error) {
            console.error("Error al buscar actores:", error);
            throw error; // Lanza el error para que sea manejado por el controlador
        }
    },


};
// return fetch('https://api.themoviedb.org/3/trending/all/day?language=es', {
//             method: 'GET',
//             headers: {
//                 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3NDg1ZWViYzU5NzcxOGU5NDZlOWZmZjkzODdkOCIsInN1YiI6IjY2MGExNzc2ZDZkYmJhMDE3ZDZmMTc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01K3zTQHhY6emHwdD0TAQoLyzEfXXasvWShbPvgTArI',
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             return data; // Retorna los datos obtenidos de la API
//         })
//         .catch(error => {
//             console.error('Error en la solicitud:', error);
//             throw new Error('Error en la solicitud'); // Lanza un error para manejarlo fuera de esta función
//         });
//     },

    // getAllSeries: () => {
    //     return fetch('https://api.themoviedb.org/3/trending/tv/day?language=es', {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3NDg1ZWViYzU5NzcxOGU5NDZlOWZmZjkzODdkOCIsInN1YiI6IjY2MGExNzc2ZDZkYmJhMDE3ZDZmMTc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01K3zTQHhY6emHwdD0TAQoLyzEfXXasvWShbPvgTArI',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         return data; // Retorna los datos obtenidos de la API
    //     })
    //     .catch(error => {
    //         console.error('Error en la solicitud:', error);
    //         throw new Error('Error en la solicitud'); // Lanza un error para manejarlo fuera de esta función
    //     });
    // },
    
//     getAllPerson: () => {
//         return fetch('https://api.themoviedb.org/3/trending/person/day?language=es', {
//             method: 'GET',
//             headers: {
//                 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3NDg1ZWViYzU5NzcxOGU5NDZlOWZmZjkzODdkOCIsInN1YiI6IjY2MGExNzc2ZDZkYmJhMDE3ZDZmMTc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01K3zTQHhY6emHwdD0TAQoLyzEfXXasvWShbPvgTArI',
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             return data; // Retorna los datos obtenidos de la API
//         })
//         .catch(error => {
//             console.error('Error en la solicitud:', error);
//             throw new Error('Error en la solicitud'); // Lanza un error para manejarlo fuera de esta función
//         });
//     }