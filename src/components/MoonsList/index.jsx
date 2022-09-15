import React from 'react';

import Moon from './Moon';

import { moons } from '../../config/data';
import classes from './styles.module.scss';

export default function MoonsList({
  planetId,
  setSelectedMoons,
  selectedMoons,
}) {
  const toggleMoonSelection = (moon) => {
    setSelectedMoons((prevState) => {
      if (prevState.findIndex((item) => item.title === moon.title) === -1) {
        return [...prevState, moon];
      }
      return prevState.filter((item) => item.title !== moon.title);
    });
  };

  return (
    <div className={classes.MoonsList}>
      {moons
        .filter((moon) => moon.planetId === planetId)
        .map((moon) => (
          <Moon
            key={moon.id}
            moon={moon}
            toggleMoonSelection={toggleMoonSelection}
            selectedMoons={selectedMoons}
          />
        ))}
    </div>
  );
}
