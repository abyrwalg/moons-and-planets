import React, { useState, useEffect } from 'react';

import Orbit from './Orbit';

import classes from './styles.module.scss';

export default function Planet({ planet, selectedMoons }) {
  const [selectedMoonCount, setSelectedMoonCount] = useState(0);

  useEffect(() => {
    setSelectedMoonCount(
      selectedMoons.filter((moon) => moon.planetId === planet.id).length
    );
  }, [planet, selectedMoons]);

  return (
    <div
      className={classes.Planet}
      style={{
        marginLeft: selectedMoonCount * 10,
        marginRight: selectedMoonCount * 10,
      }}
    >
      {Array.from(Array(selectedMoonCount).keys()).map((orbit, index) => (
        <Orbit key={orbit} index={index} />
      ))}
      {planet.title}{' '}
      <span className={classes.selectedMoonCount}>{selectedMoonCount}</span>
    </div>
  );
}
