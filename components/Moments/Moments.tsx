import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

import MomentsList from '../MomentsList/MomentsList';
import Filters from '../MomentsFilters/MomentsFilters';

import { Title } from '../GenericComponets';

import AuthContext from '../../auth';

import { Label, Moment } from '../../models';

import styles from './Moments.module.css';

const Moments = () => {
  const { session, user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const [moments, setMoments] = useState<Moment[]>([]);
  const [momentsBack, setMomentsBack] = useState<Moment[]>([]);
  const [labels, setLabels] = useState<Label[]>([]);
  const [filters, setFilters] = useState<Object>({});

  useEffect(() => {
    setLoading(true);

    const getMoments = async () => {
      try {
        const { data } = await axios.get(`${process.env.API_URI}/moments`, {
          auth: {
            username: user.username,
            password: user.password,
          },
        });

        setMoments(data.moments);
        setMomentsBack(data.moments);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    const getLabels = async () => {
      try {
        const { data } = await axios.get(`${process.env.API_URI}/labels`, {
          auth: {
            username: user.username,
            password: user.password,
          },
        });

        const newFilters: Object = data.labels.map((label: Label) => ({ [label.value]: false }));

        setLabels(data.labels);
        setFilters(newFilters);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    const fetchData = async () => {
      await getMoments();
      await getLabels();

      setLoading(false);
    };

    if (session) {
      fetchData();
    }
  }, [session, user]);

  useEffect(() => {
    const activeFilters: string[] = Object.keys(filters).map(
      (key) => (filters[key] === true ? key : null),
    ).filter((filter) => filter !== null);

    if (activeFilters.length > 0) {
      const momentsFiltered = momentsBack.filter(
        ({ labels: fL }) => fL.some((label) => activeFilters.includes(label)),
      );

      setMoments(momentsFiltered);
    } else {
      setMoments(momentsBack);
    }
  }, [filters]);

  return (
    <>
      <Title textAlign="center">Best animated moments</Title>

      {loading ? (
        <div className={styles.loadingContainer}>
          <CircularProgress />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Moments;
