const movieService = require ("../services/movieService.js");
const {Movie} = require ("../models/movie.js")


module.exports = {
    getMovies: async (req,res) => {
        const movies = await movieService.getAllMovies();
        
        res.status(200).json(movies);
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


    


