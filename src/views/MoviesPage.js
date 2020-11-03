import React, { Component } from "react";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import getQueryParams from "../utils/getQueryParams";
import Spiner from "../Components/Spiner";
import tvAPI from "../services/tv-api";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query);
      // return;
    }
    // this.fetchPopularMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  // fetchPopularMovies = (query) => {
  //   this.setState({ loading: true });
  //   tvAPI
  //     .fetchHomePage(query)
  //     .then((movies) => this.setState({ movies }))
  //     .catch((error) => this.setState({ error }))
  //     .finally(() => this.setState({ loading: false }));
  // };

  fetchMovies = (query) => {
    this.setState({ loading: true });
    tvAPI
      .fetchMovieWithQuery(query)
      .then((movies) => this.setState({ movies }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, error, loading } = this.state;
    const { match } = this.props;
    return (
      <>
        <SearchBox onSubmit={this.handleChangeQuery} />
        {error && <p>Oops, something went wrong</p>}
        {loading && <Spiner />}

        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`${match.url}/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
