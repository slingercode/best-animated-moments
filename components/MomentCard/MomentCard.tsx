import React from 'react';

import { Moment } from '../../models';

import styles from './MomentCard.module.css';

interface Props {
  moment: Moment;
}

const MomentCard = ({ moment }: Props) => (
  <div className={styles.container}>
    <h1>{moment.moment}</h1>
    <h2>
      {moment.from}
      -
      {moment.when}
      , at -
      {moment.timestamp}
    </h2>
    <h3>{moment.created}</h3>
    <h4>{moment.labels[0]}</h4>
  </div>
);

export default MomentCard;
