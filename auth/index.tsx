import {
  useState,
  useEffect,
  createContext,
} from 'react';

import { User } from '../models';

import { LOCALSTORAGE_USER } from '../utils/constants';

interface Context {
  user: User;
  session: boolean;
  login: Function;
  logout: Function;
}

const AuthContext = createContext<Context>({
  user: {
    username: '',
    password: '',
  },
  session: false,
  login: null,
  logout: null,
});

export const useAuth = () => {
  const [session, setSession] = useState(false);
  const [user, setUser] = useState<User>({
    username: '',
    password: '',
  });

  useEffect(() => {
    const userLocalStorage = localStorage.getItem(LOCALSTORAGE_USER);

    if (userLocalStorage !== null) {
      setSession(true);
      setUser(JSON.parse(userLocalStorage));
    }
  }, []);

  const login = (username: string, password: string) => {
    const userToSave = { username, password };
    localStorage.setItem('user', JSON.stringify(userToSave));

    setUser(userToSave);
    setSession(true);
  };

  const logout = () => {
    localStorage.removeItem(LOCALSTORAGE_USER);
    setSession(false);
    setUser({ username: '', password: '' });
  };

  return {
    user,
    session,
    login,
    logout,
  };
};

export default AuthContext;
