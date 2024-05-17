const renderObjects = (objects, inLocaction) => {
    if (inLocaction === "carousel") {
        const carousel = '.carousel-inner';
     
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
        });
      
    } else {
        const containerIn =`${inLocaction}`;

        
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
            ;
        });
    }   
}

module.exports = { renderObjects };
