document.addEventListener('DOMContentLoaded', function() {
    const addMovieBtn = document.getElementById("addMovieBtn");
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            stars.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });

    addMovieBtn.addEventListener('click', addNewMovie);
});

function addNewMovie() {
    let movieName = document.getElementById("movieName").value;
    let movieGenre = document.getElementById("movieGenre").value;
    let releaseDate = document.getElementById("releaseDate").value;
    let director = document.getElementById("director").value;
    let rating = document.querySelector(".star.active").getAttribute("data-value");

    const newMovie = new Movie(movieName, movieGenre, releaseDate, director);
    newMovie.setRating(rating);

    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push(newMovie);
    localStorage.setItem('movies', JSON.stringify(movies));

    window.location.href = 'topMovies.html';
}

