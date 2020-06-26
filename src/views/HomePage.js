import React, { Component } from 'react';

import MovieList from '../components/MovieList/MovieList';

import * as moviesApi from '../services/moviesApi';

export default class HomePage extends Component {
  state = { items: [] };

  componentDidMount() {
    moviesApi
      .fetchTrendingMovies()
      .then(items => this.setState({ items: items.results }));
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>Trending today</h1>
        <MovieList items={items} />
      </div>
    );
  }
}
