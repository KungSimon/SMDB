document.addEventListener('DOMContentLoaded', function() {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    
    displayMovies(movies);

    const movieListContainer = document.getElementById('mainContent');
    movieListContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-button')) {
            const indexToRemove = parseInt(event.target.dataset.index);

            movies.splice(indexToRemove, 1);

            localStorage.setItem('movies', JSON.stringify(movies));

            displayMovies(movies);
        }
    });
});

function displayMovies(movies) {
    const movieListContainer = document.getElementById('mainContent');

    movieListContainer.innerHTML = '';

    movies.forEach((movie, index) => {
        const movieInfo = document.createElement('div');
        movieInfo.innerHTML = `
            <h2>${movie.name}</h2>
            <p>Genre: ${movie.genre}</p>
            <p>Release Date: ${movie.releaseDate}</p>
            <p>Director: ${movie.director}</p>
            <p>Rating: ${movie.rating}</p>
            <button class="remove-button" data-index="${index}">Remove</button>
        `;
        movieListContainer.appendChild(movieInfo);
    });
}
