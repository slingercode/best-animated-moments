import React from 'react';

import Layout from '../components/Layout/Layout';
import Login from '../components/Login/Login';
import Logout from '../components/Logout/Logout';
import Moments from '../components/Moments/Moments';
import Unauthorized from '../components/Unauthorized/Unauthorized';

import AuthContext, { useAuth } from '../auth';

const Home = () => {
  const {
    user,
    session,
    login,
    logout,
  } = useAuth();

  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          session,
          login,
          logout,
        }}
      >

        <Layout>
          {!session ? <Login /> : <Logout />}

          {session ? <Moments /> : <Unauthorized />}
        </Layout>
      </AuthContext.Provider>

      <style jsx global>
        {`
          * {
            box-sizing: border-box;
          }
  
          html,
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
        `}
      </style>
    </>
  );
};

export default Home;
