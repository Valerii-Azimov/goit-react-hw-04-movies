import React, { Component, Suspense } from "react";
import tvAPI from "../services/tv-api";
import { Link, Route } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
// import Cast from "../views/Cast";
// import Reviews from "../views/Reviews";
import Spiner from "../Components/Spiner";
import movieDetalisRoutes from ".././movieDetalisRoutes";
// import style from "./views.module.css";

export default class MovieDetails extends Component {
  state = { movie: null, error: null, loading: false };

  componentDidMount() {
    this.setState({ loading: true });
    tvAPI
      .fetchMovieDetails(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
    // .then(console.log);
  }

  render() {
    const { movie, error, loading } = this.state;
    const { match } = this.props;
    return (
      <>
        {error && <p>Oops, something went wrong</p>}

        {loading && <Spiner />}
        {this.state.movie && (
          <div>
            <div>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  width="189"
                />
              </div>

              <div>
                <h1>
                  {movie.title}({movie.release_date.substring(0, 4)})
                </h1>
                <p>User Score {movie.vote_average}</p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>{movie.genres.map((genr) => genr.name).join(" ")}</p>
              </div>
            </div>

            <div>
              <h3>Additional information</h3>
              <ul>
                <li>
                  <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
                </li>
                <li>
                  <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        <Suspense fallback={<h2>...Loading</h2>}>
          {movieDetalisRoutes.map((route) => (
            <Route
              key={route.path}
              {...route}
              path={`${match.path}${route.path}`}
            />
          ))}
        </Suspense>
      </>
    );
  }
}
