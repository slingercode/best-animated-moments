import React from 'react';

import Layout from '../components/Layout/Layout';

const Home: React.FC = () => (
  <Layout>
    <h1>404 - Not found</h1>

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
