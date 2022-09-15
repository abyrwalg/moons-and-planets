import React from 'react';

import Planet from './Planet';
import MoonsList from '../../MoonsList';

import classes from './styles.module.scss';

export default function PlanetSystem({
  planet,
  selectedMoons,
  setSelectedMoons,
}) {
  return (
    <div className={classes.PlanetSystem}>
      <Planet selectedMoons={selectedMoons} planet={planet} />
      <MoonsList
        setSelectedMoons={setSelectedMoons}
        selectedMoons={selectedMoons}
        planetId={planet.id}
      />
    </div>
  );
}
