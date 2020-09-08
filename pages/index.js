import axios from 'axios';
import {useEffect} from 'react';

import Layout from '../components/layout';

const Home = () => {

  useEffect(() => {
    const request = async () => {
      const response = await axios.get(`${process.env.API_URI}/ping`);
      console.log(response);
    };

    request();
  }, []);

  return (
    <Layout>
      <h1>Best moments</h1>

      <style jsx global>{`
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
      `}</style>
    </Layout>
  );
}

export default Home;
