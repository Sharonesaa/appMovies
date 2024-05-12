const movieService = require ("../services/movieService.js");

module.exports = {
    getMovies: async (req,res) => {
        const movies = await movieService.getAllMovies();
        
        res.status(200).json(movies);
    }

    // getSeries: async (req,res) => {
    //     const series = await movieService.getAllSeries();
        
    //     res.status(200).json(series);

    // },

    // getPerson: async (req,res) => {
    //     const person = await movieService.getAllPerson();
        
    //     res.status(200).json(person);

    // },

    
};

