const {Movie} = require ("../models/Movie")
module.exports = {
    getAllMovies: async() => {
        try {
            const movies = await Movie.find();
            console.log("Documentos encontrados en la colección 'Movie':", movies.length);

            return movies;
        } catch (error) {
            console.error("Error al buscar películas:", error);
            throw error; // Lanza el error para que sea manejado por el controlador
        }
    }

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