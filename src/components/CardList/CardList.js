import React from 'react'

import Card from '../Card'

import classes from './CardList.module.scss'

function CardList() {
  return (
    <div className={classes['card-list']}>
      <ul className={classes.cards}>
        <li className={classes.cards__item}>
          <Card />
        </li>
      </ul>
      <button type="button" className={classes['card-list__button']}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}

export default CardList
