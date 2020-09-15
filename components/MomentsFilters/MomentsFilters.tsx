import React from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';

import { Subtitle } from '../GenericComponets';

import styles from './MomentsFilters.module.css';

import { Label } from '../../models';

interface Props {
  labels: Label[];
  activeFilters: {
    label: string;
  };
  setActiveFilters: React.Dispatch<React.SetStateAction<{
    label: string;
  }>>;
}

const Filters = ({ labels, activeFilters, setActiveFilters }: Props) => {
  const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveFilters({ label: target.value });
  };

  return (
    <div className={styles.container}>
      <Subtitle textAlign="center">Filters</Subtitle>

      <div className={styles.filters}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="category-select">Category</InputLabel>
          <Select
            native
            label="Category"
            value={activeFilters.label}
            onChange={handleChange}
            inputProps={{
              name: 'category',
              id: 'category-select',
            }}
          >
            <option aria-label="None" value="" />
            {labels.map((label) => (
              <option key={label.value} value={label.value}>{label.label}</option>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Filters;
