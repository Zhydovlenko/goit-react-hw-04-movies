import React, { Component } from 'react';

import MovieDetails from '../components/MovieDetails/MovieDetails';

import * as moviesApi from '../services/moviesApi';
import getId from '../utils/getId';

export default class MovieDetailsPage extends Component {
  state = {
    item: null,
  };

  componentDidMount() {
    const id = getId(this.props);
    moviesApi.fetchMoviesWithId(id).then(item => this.setState({ item }));
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
    const { item } = this.state;
    return (
      <div>
        {item && (
          <MovieDetails
            photo={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                : 'https://us.123rf.com/450wm/oculo/oculo2004/oculo200400003/143645399-stock-vector-no-image-available-icon-.jpg?ver=6'
            }
            item={item}
            onGoBack={this.handleGoBack}
            from={this.props.location?.state?.from}
          />
        )}
      </div>
    );
  }
}
