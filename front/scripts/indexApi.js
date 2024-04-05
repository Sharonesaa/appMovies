const listMovies = () => {
    $.ajax({
        type: 'GET',
        url: 'https://api.themoviedb.org/3/trending/all/day?language=es',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3NDg1ZWViYzU5NzcxOGU5NDZlOWZmZjkzODdkOCIsInN1YiI6IjY2MGExNzc2ZDZkYmJhMDE3ZDZmMTc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01K3zTQHhY6emHwdD0TAQoLyzEfXXasvWShbPvgTArI'
        },
        contentType: 'application/json',
        success: function(data) {
            const firstTenMovies = data.results.slice(0, 10);
            // Crear un nuevo array con los datos deseados
            const formattedMovies = firstTenMovies.map(movie => ({
                title: movie.title,
                poster_path: movie.poster_path,
                overview: movie.overview
            }));
            renderMovies(formattedMovies);
        },
        error: function(error) {
            console.log(error);
        }
    });
};

const renderMovies = (movies) => {
    const carousel = $('.carousel-inner');
    carousel.empty(); // Limpiar el contenedor antes de agregar las tarjetas

    movies.forEach(movie => {
        const card = `
            <div class="carousel-item">
                <div class= "imgContainer" >
                    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                </div>
                <div class= "imgTexto">
                    <h3>${movie.title}</h3>
                    <p>${movie.overview}</p>
                </div>
            </div>
            
        `;
        carousel.append(card); // Agregar la tarjeta al contenedor
    });
    carousel.find('div:first').addClass('active');
};


$(document).ready(function($) {
    listMovies();
});