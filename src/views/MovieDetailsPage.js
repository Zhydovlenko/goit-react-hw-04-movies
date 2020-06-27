import React, { Component } from 'react';
import { toast } from 'react-toastify';

import MovieDetails from '../components/MovieDetails/MovieDetails';

import * as moviesApi from '../services/moviesApi';
import { tmdb, defaultImage } from '../services/tmdbImg';
import getId from '../utils/getId';

import 'react-toastify/dist/ReactToastify.css';

export default class MovieDetailsPage extends Component {
  state = {
    item: null,
    error: false,
  };

  componentDidMount() {
    const id = getId(this.props);
    moviesApi
      .fetchMoviesWithId(id)
      .then(item => this.setState({ item }))
      .catch(error => this.setState({ error }));
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    if (location.state) {
      history.push(location.state.from);
      return;
    }
    history.push('/movies');
  };

  render() {
    const { item, error } = this.state;
    return (
      <div>
        {!error && item && (
          <MovieDetails
            photo={item.poster_path ? tmdb + item.poster_path : defaultImage}
            item={item}
            onGoBack={this.handleGoBack}
            from={this.props.location?.state?.from}
          />
        )}
        {error && toast.error(`Something went wrong...`)}
      </div>
    );
  }
}
