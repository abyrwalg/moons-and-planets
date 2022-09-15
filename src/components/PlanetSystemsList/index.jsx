import React, { useState } from 'react';

import PlanetSystem from './PlanetSystem';

import { planets } from '../../config/data';
import classes from './styles.module.scss';

export default function PlanetsList() {
  const [selectedMoons, setSelectedMoons] = useState([]);
  return (
    <div className={classes.PlanetsList}>
      {planets.map((planet) => (
        <PlanetSystem
          key={planet.id}
          planet={planet}
          selectedMoons={selectedMoons}
          setSelectedMoons={setSelectedMoons}
        />
      ))}
    </div>
  );
}
