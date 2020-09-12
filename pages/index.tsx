import React from 'react';

import Layout from '../components/Layout/Layout';
import Moments from '../components/Moments/Moments';

const Home: React.FC = () => (
  <Layout>
    <h1>Best moments</h1>
    <Moments />

    <style jsx global>
      {`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}
    </style>
  </Layout>
);

export default Home;
