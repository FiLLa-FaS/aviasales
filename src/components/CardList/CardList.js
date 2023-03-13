import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MoonLoader from 'react-spinners/MoonLoader'
import { v4 as uuidv4 } from 'uuid'

import { changeTicketsLengthAction } from '../../store/actions'
import {
  sortType,
  ticketsArr,
  ticketsHasError,
  ticketsIsLoading,
  ticketsLength,
  transfers,
} from '../../store/selectors'
import Card from '../Card'

import classes from './CardList.module.scss'

function CardList() {
  const length = useSelector(ticketsLength)
  const tickets = useSelector(ticketsArr)
  const sort = useSelector(sortType)
  const transfer = useSelector(transfers)
  const hasError = useSelector(ticketsHasError)
  const isLoading = useSelector(ticketsIsLoading)
  const dispatch = useDispatch()

  const handleMoreButton = () => {
    dispatch(changeTicketsLengthAction())
  }

  const sortTickets = (defaultTickets) => {
    const copiedTickets = [...defaultTickets]
    let sortedTickets
    if (sort === 'cheap') {
      sortedTickets = copiedTickets.sort((a, b) => a.price - b.price)
    } else if (sort === 'fast') {
      sortedTickets = copiedTickets.sort((a, b) => {
        const aDuration = a.segments.reduce((sum, currentDuration) => sum + currentDuration.duration, 0)
        const bDuration = b.segments.reduce((sum, currentDuration) => sum + currentDuration.duration, 0)
        return aDuration - bDuration
      })
    } else {
      sortedTickets = copiedTickets.sort((a, b) => {
        const aDuration = a.segments.reduce((sum, currentDuration) => sum + currentDuration.duration, 0)
        const aRating = aDuration * 0.5 + a.price * 0.5
        const bDuration = b.segments.reduce((sum, currentDuration) => sum + currentDuration.duration, 0)
        const bRating = bDuration * 0.5 + b.price * 0.5
        return aRating - bRating
      })
    }
    return sortedTickets
  }

  const filterTickets = (defaultTickets) => {
    let filteredTickets
    if (transfer.all) {
      filteredTickets = defaultTickets
    } else {
      const conditions = Object.keys(transfer)
      const filteredConditions = conditions.filter((condition) => transfer[condition])
      const conditionsToNumbers = filteredConditions.map((condition) => {
        let num
        switch (condition) {
          case 'oneTransfer':
            num = 1
            break
          case 'twoTransfers':
            num = 2
            break
          case 'threeTransfers':
            num = 3
            break
          default:
            num = 0
        }
        return num
      })
      filteredTickets = defaultTickets.filter((ticket) => {
        let flag = true
        const stops = []
        ticket.segments.map((segment) => {
          stops.push(segment.stops.length)
          return true
        })
        stops.map((stop) => {
          if (!conditionsToNumbers.includes(stop)) {
            flag = false
          }
          return true
        })
        return flag
      })
    }
    return filteredTickets
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
    const filteredTickets = filterTickets(tickets)
    const sortedTickets = sortTickets(filteredTickets)
    const croppedTickets = sortedTickets.length > length ? sortedTickets.slice(0, length) : sortedTickets
    if (croppedTickets.length === 0) {
      return <p>Билетов не найдено</p>
    }

    return (
      <>
        {isLoading && <MoonLoader color="#2196f3" className={classes['card-list__spinner']} />}
        {hasError && <p>Не всем билетам удалось загрузиться, попробуйте позже</p>}
        <ul className={classes.cards}>
          {croppedTickets.map((ticket) => (
            <li key={uuidv4()} className={classes.cards__item}>
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
