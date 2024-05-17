
const renderObjects = (objects, inLocaction, media_type) => {

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
            
            const finalBackdrop = element.backdrop && element.backdrop.includes("http")
            ? element.backdrop
            : `https://image.tmdb.org/t/p/original/${element.backdrop}&w=256&q=100`;
        
        
            const card = `
            <div class="carousel-item">
                <div class= "imgContainer" >
                    <img src=${finalBackdrop} alt="${element.title}">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>${element.title}</h5>
                    <div class="botones">
                        <button class="btn btn-primary play-btn" id="${element.moviedb_id}" media-type="${media_type}">Trailer</button>
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
        
        objects = objects.reverse()
        objects.forEach(element => {
            const title = element.title;
            const overview = element.overview;
            const poster_path = element.poster && element.poster.includes("http")
            ? element.poster
            : `https://image.tmdb.org/t/p/w500/${element.poster}`;
        
            const card = `
                <div class="posterCard">
                    <img style="10rem" src=${poster_path} alt="${title}" data-bs-original-title="${title}">
                    <div class="text desvanecer">
                        <img class="imgplay" src="src/img/play.png" id="${element._id}" media-type="${media_type}" style="width:40%; height:25%; margin-top:55%; margin-left:30%" ; alt="play">     
                    </div>
                </div>
            `;
            containerIn.append(card);
        });
    }   
}

const getObjects = async (url) => {
    try {
        const response = await fetch(url);
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

const mainConstructor = async () => {
    try {
        const carouselObjects = await getObjects('http://localhost:3000/movies');
        renderObjects(carouselObjects, "carousel","movie");

        const moviesObjects = await getObjects('http://localhost:3000/movies');
        renderObjects(moviesObjects, "containerMoviesList","movie");

        const seriesObjects = await getObjects('http://localhost:3000/series');
        renderObjects(seriesObjects, "containerSeriesList","tv");


        const actorsObjects = await getObjects('http://localhost:3000/actors');
        renderObjects(actorsObjects, "containerNovelsList","person");
    
       
        // const videosYoutube = await getObjects('https://api.themoviedb.org/3/movie/157336/videos?append_to_response=videos');
        // renderObjects(videosYoutube, "carousel");
        
    } catch (error) {
        console.error('Error en la carga de datos:', error);
    }
};

$(document).ready(function() {
    mainConstructor();

    // Asignar evento de clic a los botones .play-btn usando delegación de eventos
    $(document).on('click', '.play-btn', async function() {
        const id = $(this).attr('id');
        const media_type = $(this).attr('media-type');
        if (id) {
            $.ajax({
                type: 'GET',
                url: `https://api.themoviedb.org/3/${media_type}/${id}/videos`,
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3NDg1ZWViYzU5NzcxOGU5NDZlOWZmZjkzODdkOCIsInN1YiI6IjY2MGExNzc2ZDZkYmJhMDE3ZDZmMTc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01K3zTQHhY6emHwdD0TAQoLyzEfXXasvWShbPvgTArI'
                },
                contentType: 'application/json',
                success: function(data) {

                    console.log(data)
                    const youtubeVideo = data.results.find(video => video.site === "YouTube" && video.official && video.type === "Teaser"|| video.type === "Trailer" && !/(Now Playing|Vertical)/i.test(video.name));
                    if (youtubeVideo) {
                        const videoKey = youtubeVideo.key;
                        const iframeCode = `<iframe src="https://www.youtube.com/embed/${videoKey}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                        // Mostrar el contenedor del video y establecer el código del iframe
                        $('.youtubePlayerOverlay').fadeIn();
                        $('#youtubePlayer').html(iframeCode);
                    } else {
                        console.error("No se encontró ningún video de YouTube válido.");
                    }
                },
                error: function(xhr, status, error) {
                    console.error("Error en la solicitud:", error);
                }
            });
        }
    });
    // Asignar evento de clic para cerrar el video al hacer clic fuera del contenedor
    $('.youtubePlayerOverlay').on('click', function(e) {
        if ($(e.target).hasClass('youtubePlayerOverlay')) {
            $(this).fadeOut();
        }
    });

 // Manejador de eventos click para las tarjetas de película
 $(document).on ('click', '.imgplay', function() {
        const id = $(this).attr('id');
        const media_type = $(this).attr('media-type');
        console.log ($(this))
        window.location.href = `detailmovie.html?id=${id}&mediatype=${media_type}`;
    });
});

 
    
    
    // const getObjects = async (url) => {
    //     try {
    //         const response = await fetch(url, {
    //             method: 'GET',
    //             headers: {
    //                 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3NDg1ZWViYzU5NzcxOGU5NDZlOWZmZjkzODdkOCIsInN1YiI6IjY2MGExNzc2ZDZkYmJhMDE3ZDZmMTc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01K3zTQHhY6emHwdD0TAQoLyzEfXXasvWShbPvgTArI',
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    
    //         const data = await response.json();
    //         const objects = data.results.slice(0, 20);
    //         return objects;
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         throw error; // Re-lanza el error para que sea manejado por quien llama a la función
    //     }
    // };
    
    // import axios from 'axios';
    
    // const getObjects = async (url) => {
    //     try {
    //         const response = await axios.get(url, {
    //             headers: {
    //                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk3NDg1ZWViYzU5NzcxOGU5NDZlOWZmZjkzODdkOCIsInN1YiI6IjY2MGExNzc2ZDZkYmJhMDE3ZDZmMTc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.01K3zTQHhY6emHwdD0TAQoLyzEfXXasvWShbPvgTArI'
    //             }
    //         });
    
    //         const objects = response.data.results.slice(0, 20);
    //         return objects;
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         throw error;
    //     }
    // };
    
    
    //Funcion Principal (la primera que se ejecuta)/
    