import React from 'react';

import { Card } from '@material-ui/core';

import { Title, Subtitle } from '../GenericComponets';

import { Moment } from '../../models';

interface Props {
  moment: Moment;
  isFirstElement: boolean;
}

const MomentCard = ({ moment, isFirstElement }: Props) => (
  <Card
    style={{
      marginTop: isFirstElement ? 40 : 0,
      backgroundColor: '#eee',
    }}
  >
    <Title>{moment.moment}</Title>
    <Subtitle>
      {moment.from}
      -
      {moment.when}
      , at -
      {moment.timestamp}
    </Subtitle>
    <h3>{moment.created}</h3>

    {moment.labels.map((label) => <h4 key={label}>{label}</h4>)}
  </Card>
);

export default MomentCard;
