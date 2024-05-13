const movieService = require ("../services/movieService.js");

module.exports = {
    getMovies: async (req,res) => {
        const movies = await movieService.getAllMovies();
        
        res.status(200).json(movies);
    },

    postMovies: async (req, res) => {
        try {
            const movieData = req.body; // Suponiendo que estás enviando los datos de la película en el cuerpo de la solicitud
            const newMovie = await movieService.postAllMovies(movieData);
            res.status(201).json(newMovie);
        } catch (error) {
            console.error("Error al crear película:", error);
            res.status(500).json({ error: "Error interno del servidor" });
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


    
};

    


