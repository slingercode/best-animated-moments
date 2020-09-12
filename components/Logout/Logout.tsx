import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { Lock } from '@material-ui/icons';

import AuthContext from '../../auth';

import styles from './Logout.module.css';

const Logout = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <Button endIcon={<Lock />} onClick={() => logout()}>
        Log Out
      </Button>
    </div>
  );
};

export default Logout;
