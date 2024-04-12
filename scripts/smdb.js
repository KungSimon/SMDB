const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");
const mainContent = document.getElementById("mainContent");

menuButton.addEventListener("click", function() {
  if (menuContent.classList.contains("hidden")) {
    menuContent.classList.remove("hidden");
  } else {
    menuContent.classList.add("hidden");
  }
});

let movieList = [];

movieList.push(new Movie("Oldboy", "Action", 2003, "Park Chan-wook", 5));

function refreshMovieContainer() {
  const movies = JSON.parse(localStorage.getItem('movies')) || [];
  const movieListContainer = document.getElementById('movieList');

  movieListContainer.innerHTML = '';

  movies.forEach(movie => {
    const movieInfo = document.createElement('div');
    movieInfo.innerHTML = `
      <h2>${movie.name}</h2>
      <p>Genre: ${movie.genre}</p>
      <p>Release Date: ${movie.releaseDate}</p>
      <p>Director: ${movie.director}</p>
      <p>Rating: ${movie.rating}</p>
    `;
    movieListContainer.appendChild(movieInfo);
  });
}

function addNewMovie() {
  let movieName = document.getElementById("movieName").value;
  let movieGenre = document.getElementById("movieGenre").value;
  let releaseDate = document.getElementById("releaseDate").value;
  let director = document.getElementById("director").value;
  let rating = document.querySelectorAll(".star.active").length;

  const newMovie = new Movie(movieName, movieGenre, releaseDate, director);
  newMovie.setRating(rating);

  let movies = JSON.parse(localStorage.getItem('movies')) || [];
  movies.push(newMovie);
  localStorage.setItem('movies', JSON.stringify(movies));
  refreshMovieContainer();

  document.getElementById("addMovieForm").reset();
}



