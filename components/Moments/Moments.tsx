import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import MomentCard from '../MomentCard/MomentCard';

import AuthContext from '../../auth';

import { Moment } from '../../models';

import styles from './Moments.module.css';

const Moments = () => {
  const { session, user } = useContext(AuthContext);
  const [moments, setMoments] = useState<Moment[]>([]);

  useEffect(() => {
    const getMoments = async () => {
      try {
        const { data } = await axios.get(`${process.env.API_URI}/moments`, {
          auth: {
            username: user.username,
            password: user.password,
          },
        });

        setMoments(data.moments);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    if (session) {
      getMoments();
    }
  }, [session, user]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best animated moments</h1>

      {moments.map((moment) => <MomentCard key={moment._id} moment={moment} />)}
    </div>
  );
};

export default Moments;
