import React, { Component } from "react";
import { Link } from "react-router-dom";
import tvAPI from "../services/tv-api";
import style from "./home.module.css";
import Spiner from "../Components/Spiner";

export default class Home extends Component {
  state = {
    movies: [],
    error: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    tvAPI
      .fetchHomePage()
      .then((movies) => this.setState({ movies }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    const { movies, error, loading } = this.state;
    return (
      <div>
        {error && <p>Oops, something went wrong</p>}
        {loading && <Spiner />}

        <h1>Trending today</h1>

        {movies.length > 0 && (
          <ul className={style.list}>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} className={style.link}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
