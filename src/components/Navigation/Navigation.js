import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = ({ routes }) => (
  <div className="navigation">
    {routes.map(({ path, name, isExact, showInNav }) =>
      showInNav ? (
        <NavLink
          key={name}
          className={styles.link}
          activeClassName={styles.activeStyle}
          exact={isExact}
          to={path}
        >
          {name}
        </NavLink>
      ) : null,
    )}
  </div>
);
export default Navigation;
