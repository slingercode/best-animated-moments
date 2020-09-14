import React from 'react';

import MomentCard from '../MomentCard/MomentCard';

import { Moment } from '../../models';

import styles from './MomentsList.module.css';

interface Props {
  moments: Moment[];
}

const MomentsList = ({ moments }: Props) => (
  <div className={styles.container}>
    {moments.map((moment, index) => (
      <MomentCard
        key={moment._id}
        moment={moment}
        isFirstElement={index !== 0}
      />
    ))}
  </div>
);

export default MomentsList;
