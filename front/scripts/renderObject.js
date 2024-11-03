export const getObjects = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3NDg1ZWViYzU5NzcxOGU5NDZlOWZmZjkzODdkOCIsInN1YiI6IjY2MGExNzc2ZDZkYmJhMDE3ZDZmMTc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01K3zTQHhY6emHwdD0TAQoLyzEfXXasvWShbPvgTArI',
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Error al obtener datos del servidor');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
};


export const renderObjects = (object) => {
    console.log (object)
    const backdrop_path = object.backdrop_path && object.backdrop_path.includes("http") 
        ? object.poster_path
        : `https://image.tmdb.org/t/p/original/${object.backdrop_path}&w=256&q=100`;

    $('#movieDetails').css('background-image', `url('${backdrop_path}')`);
    const containerMain = $('#containerMain');

    const title = object.title;
    const overview = object.overview;
    const poster_path = object.poster_path && object.poster_path.includes("http")
        ? object.poster
        : `https://image.tmdb.org/t/p/w500/${object.poster_path}`;
    const id = object.id;
    const duration = object.runtime;
    const genres = object.genres.map(genre => genre.name).join(' | ');
    const year = object.release_date;
    const director = object.production_companies.map(production => production.name).join(' ');
    const languages = object.spoken_languages.map(language => language.name).join(' ');

    const card = `
    <div class="main-container">
        <!-- 60% - Película y póster -->
        <div class="movie-section">
            <div class="poster-container">
                <img src="${poster_path}" class="poster-image" alt="Poster de la película">
            </div>
        </div>

        <!-- 40% - Foro de comentarios -->
        <div class="comments-section">
            <div class="movie-info">
                <h4>${title}</h4>
                <p>Idiomas: ${languages}</p>
                <p>Director: ${director}</p>
                <p>Año: ${year}</p>
                <p>Géneros: ${genres}</p>
                <p>Duración: ${duration} minutos</p>
            </div>
            <div class="comments-list">
                <div class="comment">
                    <p>Comentario 1 de ejemplo... <span class="rating-display">⭐⭐⭐⭐☆</span></p>
                </div>
            </div>
            <div class="add-comment">
                <textarea placeholder="Escribe tu comentario..." id="newComment"></textarea>
                <div class="star-rating">
                    <span onclick="setRating(1)">★</span>
                    <span onclick="setRating(2)">★</span>
                    <span onclick="setRating(3)">★</span>
                    <span onclick="setRating(4)">★</span>
                    <span onclick="setRating(5)">★</span>
                </div>
                 <button onclick="addComment('${id}', document.getElementById('newComment').value, selectedRating)">Agregar comentario</button>
 
            </div>
        </div>
    </div>
`;

containerMain.html(card);
}