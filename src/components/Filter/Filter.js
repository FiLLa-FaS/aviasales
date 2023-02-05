/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import classes from './Filter.module.scss'

function Filter() {
  return (
    <div className={classes.filter}>
      <h2 className={classes.filter__title}>Количество пересадок</h2>
      <ul className={classes.filter__list}>
        <li className={classes['filter__list-item']}>
          <label className={classes.filter__label}>
            <input type="checkbox" className={classes.filter__checkbox} />
            Все
          </label>
        </li>
        <li className={classes['filter__list-item']}>
          <label className={classes.filter__label}>
            <input type="checkbox" className={classes.filter__checkbox} />
            Без пересадок
          </label>
        </li>
        <li className={classes['filter__list-item']}>
          <label className={classes.filter__label}>
            <input type="checkbox" className={classes.filter__checkbox} />1 пересадка
          </label>
        </li>
        <li className={classes['filter__list-item']}>
          <label className={classes.filter__label}>
            <input type="checkbox" className={classes.filter__checkbox} />2 пересадки
          </label>
        </li>
        <li className={classes['filter__list-item']}>
          <label className={classes.filter__label}>
            <input type="checkbox" className={classes.filter__checkbox} />3 пересадки
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Filter
