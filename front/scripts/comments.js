let selectedRating = 0;

function setRating(rating) {
    selectedRating = rating;
    const stars = document.querySelectorAll(".star-rating span");
    stars.forEach((star, index) => {
        star.classList.toggle("selected", index < rating);
    });
}

function addComment() {
    const commentText = document.getElementById("newComment").value;

    if (!commentText.trim() || selectedRating === 0) {
        alert("Por favor, agrega un comentario y selecciona una calificación.");
        return;
    }

    const commentsList = document.querySelector(".comments-list");
    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.innerHTML = `<p>${commentText} <span class="rating-display">${"★".repeat(selectedRating)}${"☆".repeat(5 - selectedRating)}</span></p>`;
    commentsList.appendChild(newComment);

    document.getElementById("newComment").value = "";
    setRating(0);
}
