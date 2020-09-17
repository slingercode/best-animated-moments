import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

import { Subtitle } from '../GenericComponets';

import styles from './MomentsFilters.module.css';

import { Label } from '../../models';

interface Props {
  labels: Label[];
  activeFilters: Object;
  setActiveFilters: React.Dispatch<React.SetStateAction<Object>>;
}

const Filters = ({ labels, activeFilters, setActiveFilters }: Props) => {
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setActiveFilters({ ...activeFilters, [target.name]: target.checked });
  };

  return (
    <div className={styles.container}>
      <Subtitle textAlign="center">Filters</Subtitle>

      <div className={styles.filters}>
        {labels.map((label) => (
          <FormControlLabel
            key={label.label}
            control={<Checkbox name={label.value} onChange={handleChange} />}
            label={label.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Filters;
