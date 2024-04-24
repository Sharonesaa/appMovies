
//FUNCION RENDERIZAR//

const renderObjects = (objects, inLocaction) => {
    if (inLocaction === "carousel") {
        const carousel = $('.carousel-inner');
        carousel.empty(); 

        const indicators = $('.carousel-indicators');
        indicators.empty();

        const objectsToShow = objects.slice(0, 5);

        objectsToShow.map((element, index) => {
            const isActive = index === 0 ? 'active' : ''; // Para marcar el primer elemento como activo
            const indicator = `<li data-bs-target="#moviesCarousel" data-bs-slide-to="${index}" class="${isActive}"></li>`;
            indicators.append(indicator)
            
            const card = `
            <div class="carousel-item">
                <div class= "imgContainer" >
                    <img src="https://image.tmdb.org/t/p/original/${element.backdrop_path}&w=256&q=100" alt="${element.title}">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>${element.title ? element.title : element.name}</h5>
                    <div class="botones">
                        <button class="btn btn-primary play-btn" id="${element.id}" media-type="${element.media_type}">Trailer</button>
                        <button class="btn btn-primary info-btn" href="">Información</button>
                    </div>
                </div>
            </div>`;
            carousel.append(card);
        });
        carousel.find('div:first').addClass('active')

   
    } else {
        const containerIn = $(`#${inLocaction}`);
        containerIn.html('');
        
        objects.forEach(element => {
            const title = element.title ? element.title : element.name;
            const overview = element.overview ? element.overview : element.original_name;
            const poster_path = element.poster_path ? element.poster_path : element.profile_path;
            const media_type = element.media_type;
            const id = element.id; // Asumiendo que cada película tiene un ID único
        
            const card = `
                <div class="posterCard">
                    <img style="10rem" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" data-bs-original-title="${title}">
                    <div class="text desvanecer">
                        <img class="imgplay" src="src/img/play.png" id="${id}" media-type="${media_type}" style="width:40%; height:25%; margin-top:55%; margin-left:30%" ; alt="play">     
                    </div>
                </div>
            `;
            containerIn.append(card);
        });
    }   
}

// const selectedMovie = objects.find(movie => movie.id == movieId);
// if (selectedMovie) {
//     const title = selectedMovie.title ? selectedMovie.title : selectedMovie.name;
//     const overview = selectedMovie.overview ? selectedMovie.overview : selectedMovie.original_name;
//     const poster_path = selectedMovie.poster_path ? selectedMovie.poster_path : selectedMovie.profile_path;
    
//     const movieDetailsElement = `
//         <div class="movie">
//         <h1>${title}</h1>
//         <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}">
//         <p>${overview}</p>
//         </div>
//     `;
//     $('#movieDetails .containerMain').html(movieDetailsElement)
    
// }
        
//Funcion llamada//

const getObjects = async (url) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: url,
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3NDg1ZWViYzU5NzcxOGU5NDZlOWZmZjkzODdkOCIsInN1YiI6IjY2MGExNzc2ZDZkYmJhMDE3ZDZmMTc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01K3zTQHhY6emHwdD0TAQoLyzEfXXasvWShbPvgTArI'
            },
            contentType: 'application/json',
            success: function(data) {
                const objects= data.results.slice(0, 20);
                resolve(objects);
            },
            error: function(error) {
                reject(error);
            }
        });
    });
};

//Funcion Principal (la primera que se ejecuta)/

const mainConstructor = async () => {
    const carouselObjects = await getObjects('https://api.themoviedb.org/3/trending/all/day?language=es');
    renderObjects(carouselObjects, "carousel");
    
    const moviesObjects = await getObjects('https://api.themoviedb.org/3/trending/all/day?language=es');
    renderObjects(moviesObjects, "containerMoviesList");
    
    const novelsObjects = await getObjects('https://api.themoviedb.org/3/trending/person/day?language=es');
    renderObjects(novelsObjects, "containerNovelsList");
    
    const seriesObjects = await getObjects('https://api.themoviedb.org/3/trending/tv/day?language=es');
    renderObjects(seriesObjects, "containerSeriesList");

    // const videosYoutube = await getObjects('https://api.themoviedb.org/3/movie/157336/videos?append_to_response=videos');
    // renderObjects(videosYoutube, "carousel");
    
}


$(document).ready(function() {
    mainConstructor();

    // Asignar evento de clic a los botones .play-btn usando delegación de eventos
    $(document).on('click', '.play-btn', async function() {
        const id = $(this).attr('id');
        const media_type = $(this).attr('media-type');
        if (id) {
            const video_objects = await getObjects(`https://api.themoviedb.org/3/${media_type}/${id}/videos`);
            const youtubeVideo = video_objects.find(video => video.site === "YouTube" && video.official && video.type === "Teaser" && !/(Now Playing|Vertical)/i.test(video.name));
            console.log(youtubeVideo);
            if (youtubeVideo) {
                const videoKey = youtubeVideo.key;
                const iframeCode = `<iframe src="https://www.youtube.com/embed/${videoKey}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        // Mostrar el contenedor del video y establecer el código del iframe
                $('.youtubePlayerOverlay').fadeIn();
                $('#youtubePlayer').html(iframeCode);
            }
        }
    });

    // Asignar evento de clic para cerrar el video al hacer clic fuera del contenedor
    $('.youtubePlayerOverlay').on('click', function(e) {
        if ($(e.target).hasClass('youtubePlayerOverlay')) {
            $(this).fadeOut();
        }
    });

 // Manejador de eventos click para las tarjetas de película
    $(document).on('click', '.imgplay', function() {
        const id = $(this).attr('id');
        const media_type = $(this).attr('media-type');
        window.location.href = `detailmovie.html?id=${id}&mediatype=${media_type}`;
    });
});

module.exports = { renderObjects };