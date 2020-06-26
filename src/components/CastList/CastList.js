import React, { Component } from 'react';

import * as moviesApi from '../../services/moviesApi';
import getId from '../../utils/getId';

export default class CastList extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const id = getId(this.props);
    moviesApi.fetchCast(id).then(items => this.setState({ items }));
  }

  render() {
    const { items } = this.state;
    return (
      <ul>
        {items &&
          items.map(item => (
            <li key={item.cast_id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                    : 'https://us.123rf.com/450wm/oculo/oculo2004/oculo200400003/143645399-stock-vector-no-image-available-icon-.jpg?ver=6'
                }
                alt={item.name}
              />
              <p>{item.name}</p>
              <p> {item.character}</p>
            </li>
          ))}
      </ul>
    );
  }
}
