import React from 'react';

import classes from './styles.module.scss';

export default function Orbit({ index }) {
  return (
    <div
      className={classes.Orbit}
      style={{ width: 120 + index * 20, height: 120 + index * 20 }}
    />
  );
}
