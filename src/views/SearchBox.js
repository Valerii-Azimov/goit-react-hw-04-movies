import React, { Component } from "react";

export default class SearchBox extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <>
        {/* <p>ok</p> */}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            autoFocus
            required
          />
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}
