import React, { Component, lazy, Suspense } from 'react';

import Searchbox from '../components/Searchbox/Searchbox';
import Loader from '../components/Loader/Loader';

import * as moviesApi from '../services/moviesApi';
import getParams from '../utils/getParams';

const MovieList = lazy(() =>
  import(
    '../components/MovieList/MovieList.js' /* webpackChunkNane: "movie-list-page" */
  ),
);
export default class MoviesPage extends Component {
  state = {
    items: [],
    searchQuery: '',
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.search !== '') {
      moviesApi
        .fetchMovies(getParams(location))
        .then(items => this.setState({ items }))
        .catch(error => this.setState({ error }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    const prevQuery = prevState.searchQuery;
    const nextQuery = searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchItems();
    }
  }

  fetchItems = () => {
    const { searchQuery } = this.state;
    moviesApi
      .fetchMovies(searchQuery)
      .then(items => this.setState({ items }))
      .catch(error => this.setState({ error }));
  };

  handleSubmit = query => {
    this.setState({
      searchQuery: query,
      items: [],
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <Searchbox onSubmit={this.handleSubmit} />
        <Suspense fallback={<Loader />}>
          {items.length > 0 && <MovieList items={items} />}
        </Suspense>
      </div>
    );
  }
}
