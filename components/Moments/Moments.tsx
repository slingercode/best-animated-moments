import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import MomentsList from '../MomentsList/MomentsList';
import Filters from '../MomentsFilters/MomentsFilters';

import { Title } from '../GenericComponets';

import AuthContext from '../../auth';

import { Label, Moment } from '../../models';

import styles from './Moments.module.css';

const Moments = () => {
  const { session, user } = useContext(AuthContext);
  const [moments, setMoments] = useState<Moment[]>([
    {
      _id: '5f55849eedf2420f61b4dd25',
      moment: 'Yo Baka',
      from: 'Naruto',
      when: '497',
      timestamp: '20:09',
      created: '2020-09-06T05:00:00.000Z',
      labels: [
        'anime',
      ],
    },
    {
      _id: '5f55849eedf2420f61b4dd253',
      moment: 'Yo Baka',
      from: 'Naruto',
      when: '497',
      timestamp: '20:09',
      created: '2020-09-06T05:00:00.000Z',
      labels: [
        'anime',
        'irl'
      ],
    },
    {
      _id: '5f55849eedf2420f61b4dd25523',
      moment: 'Yo Baka',
      from: 'Naruto',
      when: '497',
      timestamp: '20:09',
      created: '2020-09-06T05:00:00.000Z',
      labels: [
        'irl',
      ],
    },
    {
      _id: '5f55849eedf2420f61b4dd25dafs',
      moment: 'Yo Baka',
      from: 'Naruto',
      when: '497',
      timestamp: '20:09',
      created: '2020-09-06T05:00:00.000Z',
      labels: [
        'anime',
      ],
    },
  ]);
  const [labels, setLabels] = useState<Label[]>([
    {
      label: 'Anime',
      value: 'anime',
    },
    {
      label: 'IRL',
      value: 'irl',
    },
  ]);
  const [filters, setFilters] = useState({
    label: '',
  });

  // useEffect(() => {
  //   const getMoments = async () => {
  //     try {
  //       const { data } = await axios.get(`${process.env.API_URI}/moments`, {
  //         auth: {
  //           username: user.username,
  //           password: user.password,
  //         },
  //       });

  //       setMoments(data.moments);
  //     } catch (error) {
  //       // eslint-disable-next-line no-console
  //       console.error(error);
  //     }
  //   };

  //   if (session) {
  //     getMoments();
  //   }
  // }, [session, user]);

  useEffect(() => {
    if (filters.label !== '') {
      const momentsFiltered = moments.filter(
        ({ labels: fL }) => fL.some((label) => label === filters.label),
      );

      setMoments(momentsFiltered);
    }
  }, [filters]);

  return (
    <>
      <Title textAlign="center">Best animated moments</Title>

      <div className={styles.container}>
        <div className={styles.moments}>
          <MomentsList moments={moments} />
        </div>

        <div className={styles.filters}>
          <Filters
            labels={labels}
            activeFilters={filters}
            setActiveFilters={setFilters}
          />
        </div>
      </div>
    </>
  );
};

export default Moments;
