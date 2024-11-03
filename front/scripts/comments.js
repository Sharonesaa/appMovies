let selectedRating = 0;

function setRating(rating) {
    selectedRating = rating;
    const stars = document.querySelectorAll(".star-rating span");
    stars.forEach((star, index) => {
        star.classList.toggle("selected", index < rating);
    });
}

const addComment = async (movieId, commentText, stars) => {
    try {
        const formData = {
            movieId: movieId,
            comment: commentText,
            stars: stars
        };
        console.log(formData)
       
        const response = await fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Especificamos que estamos enviando JSON
            },
            body: JSON.stringify(formData) // Convertimos el objeto a JSON
        });

        // Verificamos si la respuesta fue exitosa
        if (!response.ok) {
            const errorData = await response.text(); // Leemos la respuesta como texto
            console.error('Error del servidor:', errorData); // Log del error
            throw new Error('Error al agregar comentario: ' + response.statusText);
        }

        const data = await response.json(); // Intentamos parsear la respuesta JSON
        alert('Comentario agregado correctamente'); // Muestra el mensaje de éxito
        // Aquí puedes actualizar la lista de comentarios o limpiar el formulario si lo deseas
    } catch (error) {
        console.error('Error al agregar comentario:', error);
        alert('Error al agregar comentario: ' + error.message);
    }
};



