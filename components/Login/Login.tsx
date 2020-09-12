import React, { useState, useContext } from 'react';
import { TextField, IconButton } from '@material-ui/core';

import { LockOpen } from '@material-ui/icons';

import AuthContext from '../../auth';

import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);

  const handleChange = (
    textInput: 'username' | 'password',
  ) => ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line default-case
    switch (textInput) {
      case 'username':
        setUsername(target.value);
        break;

      case 'password':
        setPassword(target.value);
        break;
    }
  };

  return (
    <div className={styles.container}>
      <TextField
        value={username}
        label="Username"
        variant="outlined"
        size="small"
        onChange={handleChange('username')}
      />

      <div className={styles.separator} />

      <TextField
        value={password}
        type="password"
        label="Password"
        variant="outlined"
        size="small"
        onChange={handleChange('password')}
      />

      <div className={styles.separator} />

      <IconButton
        disabled={username === '' && password === ''}
        onClick={() => login(username, password)}
      >
        <LockOpen />
      </IconButton>
    </div>
  );
};

export default Login;
