const moviesContainer = document.getElementById('moviesContainer')

function transformmovies() {
    // Limpiar el contenedor antes de agregar las tarjetas
    moviesContainer.innerHTML = '';
    
    tempData.map(movie => {
        // Llamar a la función createTags para obtener la tarjeta de película
        const card = createTags(movie);
        // Añadir la tarjeta al contenedor en el DOM
        moviesContainer.appendChild(card);
    });
}

function createTags(movie) {
    const { title, year, director, duration, genre, rate, poster } = movie;

    const card = document.createElement('div');
    card.classList.add('card');

    // Crear elementos para mostrar los datos de la película
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const yearElement = document.createElement('p');
    yearElement.textContent = `Year: ${year}`;

    const directorElement = document.createElement('p');
    directorElement.textContent = `Director: ${director}`;

    const durationElement = document.createElement('p');
    durationElement.textContent = `Duration: ${duration}`;

    const genreElement = document.createElement('p');
    genreElement.textContent = `Genre: ${genre.join(', ')}`;

    const rateElement = document.createElement('p');
    rateElement.textContent = `Rate: ${rate}`;

    const posterElement = document.createElement('img');
    posterElement.src = poster;
    posterElement.alt = title;

    // Añadir los elementos creados a la tarjeta
    card.appendChild(titleElement);
    card.appendChild(yearElement);
    card.appendChild(directorElement);
    card.appendChild(durationElement);
    card.appendChild(genreElement);
    card.appendChild(rateElement);
    card.appendChild(posterElement);

    return card; // Devolver la tarjeta creada
}

document.addEventListener('DOMContentLoaded', function() {
    transformmovies();
});
