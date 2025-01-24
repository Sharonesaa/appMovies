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
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(formData) 
        });

        if (!response.ok) {
            const errorData = await response.text(); 
            console.error('Error del servidor:', errorData); 
            throw new Error('Error al agregar comentario: ' + response.statusText);
        }

        const data = await response.json(); 
        alert('Comentario agregado correctamente'); 
    } catch (error) {
        console.error('Error al agregar comentario:', error);
        alert('Error al agregar comentario: ' + error.message);
    }
};



