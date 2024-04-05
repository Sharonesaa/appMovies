const moviesContainer = document.getElementById('moviesContainer')

function mainscream(){

    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = ''; 

    tempData.forEach((movie, index) => {
        const card = createMain(movie); 
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) { 
            carouselItem.classList.add('active');
        }
        carouselItem.appendChild(card);
        carouselInner.appendChild(carouselItem); 
    });
}


// function transformmovies() {
//     const carouselInner = document.querySelector('.carousel-inner');
//     carouselInner.innerHTML = ''; 

//     const movieCards = tempData.map((movie, index) => {
//         const card = createTags(movie); 
//         const carouselItem = document.createElement('div');
//         carouselItem.classList.add('carousel-item');
//         if (index === 0) { 
//             carouselItem.classList.add('active');
//         }
//         carouselItem.appendChild(card);
//         carouselInner.appendChild(carouselItem); 

//         return card; 
//     });

//     return movieCards;
// }

function createMain(movie){
    const poster = movie.poster;
    const card = document.createElement('div');
    card.classList.add('cards');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const posterElement = document.createElement('img');
    posterElement.src = poster;
    posterElement.alt = movie.title; // Corregimos aquí para usar el título de la película

    posterElement.classList.add('poster-image');
    imageContainer.appendChild(posterElement);

    card.appendChild(imageContainer);
    return card; // Retornamos el elemento card

}

// function createTags(movie) {
//     const { title, year, director, duration, genre, rate, poster } = movie;

//     const card = document.createElement('div');
//     card.classList.add('cards');

//     const imageContainer = document.createElement('div');
//     imageContainer.classList.add('image-container');

//     const posterElement = document.createElement('img');
//     posterElement.src = poster;
//     posterElement.alt = title;
//     posterElement.classList.add('poster-image');

//     imageContainer.appendChild(posterElement);

//     const textContainer = document.createElement('div');
//     textContainer.classList.add('text-container');

//     const titleElement = document.createElement('h2');
//     titleElement.textContent = title;

//     const yearElement = document.createElement('p');
//     yearElement.textContent = `Year: ${year}`;

//     const directorElement = document.createElement('p');
//     directorElement.textContent = `Director: ${director}`;

//     const durationElement = document.createElement('p');
//     durationElement.textContent = `Duration: ${duration}`;

//     const genreElement = document.createElement('p');
//     genreElement.textContent = `Genre: ${genre.join(', ')}`;

//     const rateElement = document.createElement('p');
//     rateElement.textContent = `Rate: ${rate}`;

//     textContainer.appendChild(titleElement);
//     textContainer.appendChild(yearElement);
//     textContainer.appendChild(directorElement);
//     textContainer.appendChild(durationElement);
//     textContainer.appendChild(genreElement);
//     textContainer.appendChild(rateElement);

//     card.appendChild(imageContainer);
//     card.appendChild(textContainer);
    
//     return card; 
// }

document.addEventListener('DOMContentLoaded', function() {
    mainscream();
});
