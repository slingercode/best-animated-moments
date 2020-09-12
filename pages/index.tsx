import React, { useEffect } from 'react';
import axios from 'axios';

import Layout from '../components/layout';

const Home: React.FC = () => {
  useEffect(() => {
    const request = async () => {
      const response = await axios.get(`${process.env.API_URI}/ping`);
      // eslint-disable-next-line no-console
      console.log(response);
    };

    request();
  }, []);

  return (
    <Layout>
      <h1>Best moments</h1>

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
};

export default Home;
