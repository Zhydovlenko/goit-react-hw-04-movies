import React from 'react';
import { Link, Route, withRouter, Switch } from 'react-router-dom';

import CastList from '../CastList/CastList';
import ReviewsList from '../ReviewsList/ReviewsList';

import styles from './MovieDetails.module.css';

const MovieDetails = ({ item, photo, onGoBack, from }) => (
  <>
    <div className={styles.container}>
      <div>
        <button className={styles.btn} type="button" onClick={onGoBack}>
          Go back
        </button>
        <img src={photo} alt={item.original_title} />
      </div>
      <div className={styles.content}>
        <h2>
          {item.title} ({item.release_date.slice(0, 4)})
        </h2>
        <p>User score:{~~item.popularity}%</p>
        <h3>Overview</h3>
        <p>{item.overview}</p>
        <h4>Genres</h4>
        <ul>
          {item.genres.map(genre => (
            <li className={styles.item} key={genre.id}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div>
      <p>Additional information</p>
      <Link
        to={{
          pathname: `/movies/${item.id}/cast`,
          state: { from },
        }}
      >
        Cast
      </Link>
      <br />
      <Link
        to={{
          pathname: `/movies/${item.id}/reviews`,
          state: { from },
        }}
      >
        Reviews
      </Link>
    </div>
    <div>
      <Switch>
        <Route path="/movies/:movieId/cast" component={CastList} />
        <Route path="/movies/:movieId/reviews" component={ReviewsList} />
      </Switch>
    </div>
  </>
);

export default withRouter(MovieDetails);
