import React, { Component } from 'react';
import { toast } from 'react-toastify';

import * as moviesApi from '../../services/moviesApi';
import { tmdb, defaultImage } from '../../services/tmdbImg';
import getId from '../../utils/getId';

import 'react-toastify/dist/ReactToastify.css';

export default class CastList extends Component {
  state = {
    items: [],
    error: null,
  };

  componentDidMount() {
    const id = getId(this.props);
    moviesApi
      .fetchCast(id)
      .then(items => this.setState({ items }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { items, error } = this.state;
    return (
      <ul>
        {!error &&
          items &&
          items.map(item => (
            <li key={item.cast_id}>
              <img
                src={
                  item.profile_path ? tmdb + item.profile_path : defaultImage
                }
                alt={item.name}
              />
              <p>{item.name}</p>
              <p> {item.character}</p>
            </li>
          ))}
        {error && toast.error(`Something went wrong...`)}
      </ul>
    );
  }
}
