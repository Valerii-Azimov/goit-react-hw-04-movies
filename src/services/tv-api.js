const baseURL = "https://api.themoviedb.org/3";
const apiKey = "cd522e9788d8f78e79cf02b54efa8266";

const fetchHomePage = () => {
  return fetch(`${baseURL}/trending/movie/day?api_key=${apiKey}`).then((res) =>
    res.json().then((entries) => entries.results)
  );
};

const fetchMovieDetails = (movieId) => {
  return fetch(`${baseURL}/movie/${movieId}?api_key=${apiKey}`).then((res) =>
    res.json()
  );
};

const fetchMovieCasts = (movieId) => {
  return fetch(
    `${baseURL}/movie/${movieId}/credits?api_key=${apiKey}`
  ).then((res) => res.json());
};

const fetchMovieReviews = (movieId) => {
  return fetch(
    `${baseURL}/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1&include_adult=false`
  ).then((res) => res.json());
};

function fetchMovieWithQuery(searchQuery) {
  return fetch(`${baseURL}/search/movie?query=${searchQuery}&api_key=${apiKey}`)
    .then((res) => res.json())
    .then((entries) => entries.results);
}

const tvAPI = {
  fetchMovieDetails,
  fetchMovieWithQuery,
  fetchHomePage,
  fetchMovieCasts,
  fetchMovieReviews,
};

export default tvAPI;
