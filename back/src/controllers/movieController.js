const movieService = require ("../services/movieService.js");
const {Movie} = require ("../models/movie.js")


module.exports = {
    getMovies: async (req, res) => {
        try {
            const movies = await movieService.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            console.error("Error al obtener las películas:", error);
            res.status(500).json({ error: "Hubo un error al obtener las películas" });
        }
    },

    postMovies: async (req, res) => {
        try {
            const formData = req.body; // Debería ser un objeto JavaScript si está en formato JSON
            console.log('Datos del formulario recibidos:', formData);
    
            const newMovie = await movieService.postAllMovies(formData);
            res.status(201).json(newMovie);
        } catch (error) {
            console.error('Error al agregar película:', error);
            res.status(500).send('Error al agregar película');
        }
    },

    getSeries: async (req,res) => {
        const series = await movieService.getAllSeries();
        
        res.status(200).json(series);
    },

    getActors: async (req,res) => {
        const series = await movieService.getAllActors();
        
        res.status(200).json(series);
    },


    getSeries: async (req, res) => {
        try {
            const series = await movieService.getAllSeries();
            res.status(200).json(series);
        } catch (error) {
            console.error("Error al obtener las series:", error);
            res.status(500).json({ error: "Hubo un error al obtener las series" });
        }
    },
    
    getActors: async (req, res) => {
        try {
            const actors = await movieService.getAllActors();
            res.status(200).json(actors);
        } catch (error) {
            console.error("Error al obtener los actores:", error);
            res.status(500).json({ error: "Hubo un error al obtener los actores" });
        }
    },
    
    getMovieById: async (req, res) => {
        const movieId = req.params.id;

        try {
            const movie = await Movie.findById(movieId);
            if (!movie) {
                return res.status(404).json({ error: 'Movie not found' });
            }
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}


    


