
//FUNCION PRINCIPAL//

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
                    <img src="https://image.tmdb.org/t/p/w500/${element.backdrop_path}" alt="${element.title}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${element.title  ? element.title : element.name}</h5>
                    </div>
                </div>
            </div>`;
            carousel.append(card);
        });
        carousel.find('div:first').addClass('active')

    } else if (inLocaction === "containerMain") {
        const containerIn = $(`#${inLocaction}`);
        containerIn.html('');
        
        objects.forEach(element => {
            const title = element.title ? element.title : element.name;
            const overview = element.overview ? element.overview : element.original_name; // Escapar comillas dobles en la descripción
            const poster_path = element.poster_path ? element.poster_path : element.profile_path;

            const card = `
                <div class="containerMainCard">
                    <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}">
                    <div>
                        <h3>${title}</h3> 
                        <p>${overview}</p>   
                    </div>
                </div>
            `;
            containerIn.append(card);
        });
    } else {
        const containerIn = $(`#${inLocaction}`);
        containerIn.html('');
        
        objects.forEach(element => {
            const title = element.title ? element.title : element.name;
            const overview = element.overview ? element.overview : element.original_name; // Escapar comillas dobles en la descripción
            const poster_path = element.poster_path ? element.poster_path : element.profile_path;

            const card = `
                <div class="posterCard">
                    <img class="" style="10rem" id="tooltipMovie1" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" data-toggle="tooltip" data-bs-original-title="${title}">
                    <div class="text desvanecer">
                        <p>"${overview}"</p>   
                    </div>
                </div>
            `;
            containerIn.append(card);
        });
        $('[data-toggle="tooltip"]').tooltip({
            placement: 'top',
            html: true, // Permitir HTML en el tooltip
            // Función para obtener el contenido del tooltip
        });

    }
}
        
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

//Funcion Renderizar en Locación//

const mainConstructor = async () => {
    const carouselObjects = await getObjects('https://api.themoviedb.org/3/trending/all/day?language=es');
    renderObjects(carouselObjects, "carousel");
    
    const moviesObjects = await getObjects('https://api.themoviedb.org/3/trending/all/day?language=es');
    renderObjects(moviesObjects, "containerMoviesList");
    
    const novelsObjects = await getObjects('https://api.themoviedb.org/3/trending/person/day?language=es');
    renderObjects(novelsObjects, "containerNovelsList");
    
    const seriesObjects = await getObjects('https://api.themoviedb.org/3/trending/tv/day?language=es');
    renderObjects(seriesObjects, "containerSeriesList");

    const detailmovie = await getObjects('https://api.themoviedb.org/3/trending/all/day?language=es');
    renderObjects(detailmovie, "containerMain");

    
}


$(document).ready(function($) {
    mainConstructor();
});


