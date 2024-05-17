module.exports = {
    validateMovieForm: (req, res, next) => {
        let arrayErrors = [];
        const { title, year, director, overview, duration, rate, genres, poster, media_type, moviedb_id, backdrop } = req.body;

        if (!title) {
            arrayErrors.push({ "field": "title", "msg": 'El título es obligatorio.' });
        }
        if (!year) {
            arrayErrors.push({ "field": "year", "msg": 'El año es obligatorio. ' });
        } else if (!(/^\d{4}$/.test(year))) {
            arrayErrors.push({ "field": "year", "msg": 'El año debe contener solo 4 dígitos. ' });
        }
        if (!director) {
            arrayErrors.push({ "field": "director", "msg": 'El director es obligatorio.' });
        }
        if (!overview) {
            arrayErrors.push({ "field": "overview", "msg": 'La descripción es obligatoria.' });
        }
        if (!duration) {
            arrayErrors.push({ "field": "duration", "msg": 'La duración es obligatoria.' });
        }
        if (!rate) {
            arrayErrors.push({ "field": "rate", "msg": 'La calificación es obligatoria.' });
        }
        if (!genres || !genres.length) {
            arrayErrors.push({ "field": "genres", "msg": 'Se debe seleccionar al menos un género.' });
        }
        if (!poster) {
            arrayErrors.push({ "field": "poster", "msg": 'El póster es obligatorio.' });
        }
        if (!backdrop) {
            arrayErrors.push({ "field": "backdrop", "msg": 'El fondo es obligatorio.' });
        }

        next();
    }
}
