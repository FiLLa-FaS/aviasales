import classNames from 'classnames'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeSortAction } from '../../store/actions'
import { sortType } from '../../store/selectors'

import classes from './Tabs.module.scss'

function Tabs() {
  const tab = useSelector(sortType)
  const dispatch = useDispatch()
  const changeSort = (name) => {
    dispatch(changeSortAction(name))
  }

  const getClasses = (name) => classNames(classes.tabs__item, tab === name ? classes.tabs__item_selected : '')

  return (
    <ul className={classes.tabs}>
      <li className={getClasses('cheap')}>
        <button className={classes.tabs__button} type="button" onClick={() => changeSort('cheap')}>
          Самый дешевый
        </button>
      </li>
      <li className={getClasses('fast')}>
        <button className={classes.tabs__button} type="button" onClick={() => changeSort('fast')}>
          Самый быстрый
        </button>
      </li>
      <li className={getClasses('optimal')}>
        <button className={classes.tabs__button} type="button" onClick={() => changeSort('optimal')}>
          Оптимальный
        </button>
      </li>
    </ul>
  )
}

export default Tabs
