import React from 'react';

import MomentCard from '../MomentCard/MomentCard';

import { Caption } from '../GenericComponets';

import { Moment } from '../../models';

import styles from './MomentsList.module.css';

interface Props {
  moments: Moment[];
}

const MomentsList = ({ moments }: Props) => (
  <>
    {moments.length > 0 ? (
      <div className={styles.container}>
        {moments.map((moment, index) => (
          <MomentCard
            key={moment._id}
            moment={moment}
            isFirstElement={index !== 0}
          />
        ))}
      </div>
    ) : (
      <div className={styles.emptyContainer}>
        <Caption>
          No moments to remember
          {' '}
          <span role="img" aria-label="emoji">
            😭
          </span>
        </Caption>
      </div>
    )}
  </>
);

export default MomentsList;
