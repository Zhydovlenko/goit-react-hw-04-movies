import { lazy } from 'react';

const Home = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "homepage" */),
);
const Movies = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /*webpackChunkName:"movie-details" */),
);

const routes = [
  {
    path: '/',
    name: 'Home',
    isExact: true,
    isExactCon: true,
    showInNav: true,
    component: Home,
  },
  {
    path: '/movies',
    name: 'Movies',
    isExact: false,
    isExactCon: true,
    showInNav: true,
    component: Movies,
  },
  {
    path: '/movies/:movieId',
    name: 'MovieDetailsPage',
    isExact: false,
    isExactCon: false,
    showInNav: false,
    component: MovieDetailsPage,
  },
];

export default routes;
