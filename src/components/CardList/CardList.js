import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MoonLoader from 'react-spinners/MoonLoader'

import { changeTicketsLengthAction } from '../../store/actions'
import Card from '../Card'

import classes from './CardList.module.scss'

function CardList() {
  const length = useSelector((state) => state.tickets.length)
  const tickets = useSelector((state) => state.tickets.tickets)
  const dispatch = useDispatch()

  const handleMoreButton = () => {
    dispatch(changeTicketsLengthAction())
  }

  const renderButton = () => {
    if (length < tickets.length) {
      return (
        <button type="button" className={classes['card-list__button']} onClick={handleMoreButton}>
          Показать еще 5 билетов!
        </button>
      )
    }
    return false
  }

  const renderTickets = () => {
    if (tickets.length === 0 || !length) {
      return <MoonLoader color="#2196f3" className={classes['card-list__spinner']} />
    }
    const filteredTickets = tickets.length > length ? tickets.slice(0, length) : tickets
    return (
      <>
        <ul className={classes.cards}>
          {filteredTickets.map((ticket) => (
            <li key={`ticket${ticket.segments[0].date}${ticket.carrier}`} className={classes.cards__item}>
              <Card ticket={ticket} />
            </li>
          ))}
        </ul>
        {renderButton()}
      </>
    )
  }

  return <div className={classes['card-list']}>{renderTickets()}</div>
}

export default CardList
