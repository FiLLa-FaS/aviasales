import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import transfersString from '../../helpers/transfersString'
import { formatDate, formatDuration } from '../../helpers/formatDate'

import classes from './Card.module.scss'

function Card({ ticket }) {
  return (
    <div className={classes.card}>
      <div className={classes.card__header}>
        <p className={classes.card__price}>{ticket.price} Р</p>
        <img
          src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
          alt="Лого компании"
          className={classes.card__logo}
        />
      </div>
      {ticket.segments &&
        ticket.segments.map((segment) => (
          <div className={classes.card__row} key={uuidv4()}>
            <div className={classes.card__column}>
              <h3 className={classes['card__column-heading']}>
                {segment.origin} – {segment.destination}
              </h3>
              <p className={classes['card__column-text']}>{formatDate(segment.date, segment.duration)}</p>
            </div>
            <div className={classes.card__column}>
              <h3 className={classes['card__column-heading']}>В пути</h3>
              <p className={classes['card__column-text']}>{formatDuration(segment.duration)}</p>
            </div>
            <div className={classes.card__column}>
              <h3 className={classes['card__column-heading']}>{transfersString(segment.stops.length)}</h3>
              <p className={classes['card__column-text']}>{segment.stops.join(', ')}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Card
