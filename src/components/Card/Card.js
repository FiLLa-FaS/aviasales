import React from 'react'

import logoCompany from '../../assets/icons/company-logo.svg'

import classes from './Card.module.scss'

function Card() {
  return (
    <div className={classes.card}>
      <div className={classes.card__header}>
        <p className={classes.card__price}>13 400 Р</p>
        <img src={logoCompany} alt="Лого компании" className={classes.card__logo} />
      </div>
      <div className={classes.card__row}>
        <div className={classes.card__column}>
          <h3 className={classes['card__column-heading']}>MOW – HKT</h3>
          <p className={classes['card__column-text']}>10:45 – 08:00</p>
        </div>
        <div className={classes.card__column}>
          <h3 className={classes['card__column-heading']}>В пути</h3>
          <p className={classes['card__column-text']}>21ч 15м</p>
        </div>
        <div className={classes.card__column}>
          <h3 className={classes['card__column-heading']}>2 пересадки</h3>
          <p className={classes['card__column-text']}>HKG, JNB</p>
        </div>
      </div>
      <div className={classes.card__row}>
        <div className={classes.card__column}>
          <h3 className={classes['card__column-heading']}>MOW – HKT</h3>
          <p className={classes['card__column-text']}>11:20 – 00:50</p>
        </div>
        <div className={classes.card__column}>
          <h3 className={classes['card__column-heading']}>В пути</h3>
          <p className={classes['card__column-text']}>13ч 30м</p>
        </div>
        <div className={classes.card__column}>
          <h3 className={classes['card__column-heading']}>2 пересадки</h3>
          <p className={classes['card__column-text']}>HKG</p>
        </div>
      </div>
    </div>
  )
}

export default Card
