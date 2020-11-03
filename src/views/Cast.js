import React, { Component } from "react";
import tvAPI from "../services/tv-api";
import Spiner from "../Components/Spiner";

export default class Cast extends Component {
  state = {
    cast: [],
    error: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    tvAPI
      .fetchMovieCasts(this.props.match.params.movieId)
      .then((data) => data.cast)
      .then((cast) => this.setState({ cast }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));

    // .then((movieCast) => this.setState({ movieCast }));
    // .then(console.log);
  }

  render() {
    const { cast, error, loading } = this.state;
    return (
      <>
        {error && <p>Oops, something went wrong</p>}

        {loading && <Spiner />}
        {cast.length > 0 ? (
          <ul>
            {cast.map((castItem) => (
              <li key={castItem.id}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${castItem.profile_path}`}
                    alt="IMG"
                    width="128"
                  />
                </div>
                {castItem.name}
                <p>Character: {castItem.character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>There is no cats for this movie</p>
        )}
      </>
    );
  }
}

// import React from "react";

// const Cast = () => <div>OK</div>;

// export default Cast;
