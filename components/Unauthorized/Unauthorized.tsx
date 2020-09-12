import React from 'react';

import styles from './Unauthorized.module.css';

const Unauthorized = () => (
  <div className={styles.container}>
    <h1>
      Unauthorized, you need to login to see this content
      {' '}
      <span role="img" aria-label="emoji">🤐</span>
    </h1>
  </div>
);

export default Unauthorized;
