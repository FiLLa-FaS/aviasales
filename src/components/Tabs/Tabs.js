import React from 'react'

import classes from './Tabs.module.scss'

function Tabs() {
  return (
    <ul className={classes.tabs}>
      <li className={classes.tabs__item}>Самый дешевый</li>
      <li className={classes.tabs__item}>Самый быстрый</li>
      <li className={classes.tabs__item}>Оптимальный</li>
    </ul>
  )
}

export default Tabs
