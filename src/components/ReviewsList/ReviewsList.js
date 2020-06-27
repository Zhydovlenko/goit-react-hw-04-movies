import React, { Component } from 'react';

import * as moviesApi from '../../services/moviesApi';
import getId from '../../utils/getId';

export default class Reviews extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const id = getId(this.props);
    moviesApi
      .fetchReviews(id)
      .then(items => this.setState({ items }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { items } = this.state;
    return (
      <ul>
        {items.length > 0 ? (
          items.map(item => (
            <li key={item.id}>
              <h3>Author: {item.author}</h3>
              <p> {item.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    );
  }
}
