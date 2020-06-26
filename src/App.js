import React, { Suspense } from 'react';

import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader/Loader';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Content from './components/Content/Content';

import routes from './routes';

import './App.module.css';

const App = () => {
  return (
    <div>
      <Navigation routes={routes} />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Content routes={routes} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
export default App;
