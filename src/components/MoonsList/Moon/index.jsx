import React from 'react';

import classNames from 'classnames';

import classes from './styles.module.scss';

export default function Moon({ moon, selectedMoons, toggleMoonSelection }) {
  const isSelected =
    selectedMoons.findIndex((item) => item.title === moon.title) !== -1;

  return (
    <div
      className={classNames(classes.Moon, { [classes.selected]: isSelected })}
      onClick={toggleMoonSelection.bind(null, moon)}
    >
      {moon.title}
    </div>
  );
}
