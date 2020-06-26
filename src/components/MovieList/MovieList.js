import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes, { string, number } from 'prop-types';


const MovieList = ({ items = [], location }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Link
          to={{
            pathname: `/movies/${item.id}`,
            state: { from: location },
          }}
        >
          {item.title} {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: number.isRequired,
      name: string,
      title: string,
    }),
  ).isRequired,
};

export default withRouter(MovieList);
