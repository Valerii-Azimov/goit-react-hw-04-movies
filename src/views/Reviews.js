import React, { Component } from "react";
import tvAPI from "../services/tv-api";
import Spiner from "../Components/Spiner";

export default class Reviews extends Component {
  state = {
    reviews: [],
    error: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    tvAPI
      .fetchMovieReviews(this.props.match.params.movieId)
      .then((data) => data.results)
      .then((reviews) => this.setState({ reviews }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { reviews, error, loading } = this.state;
    return (
      <>
        {error && <p>Oops, something went wrong</p>}
        {loading && <Spiner />}
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </>
    );
  }
}
