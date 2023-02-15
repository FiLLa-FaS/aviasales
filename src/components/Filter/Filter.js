import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  changeNoneTransfersAction,
  changeOneTransferAction,
  changeThreeTransfersAction,
  changeTwoTransfersAction,
  disableTransfersAction,
  disableAllTransfersAction,
  setAllTransfersAction,
} from '../../store/actions'

import classes from './Filter.module.scss'

function Filter() {
  const filters = useSelector((state) => state.transfer.transfer)
  const dispatch = useDispatch()
  const onAllInputChange = (e) => {
    if (e.target.checked) {
      dispatch(setAllTransfersAction())
    } else {
      dispatch(disableTransfersAction())
    }
  }
  const onInputChange = (e, action) => {
    if (!e.target.checked && filters.all) {
      dispatch(disableAllTransfersAction())
    }
    dispatch(action(e.target.checked))
  }

  useEffect(() => {
    if (filters.none && filters.oneTransfer && filters.twoTransfers && filters.threeTransfers) {
      dispatch(setAllTransfersAction())
    }
  }, [filters.none, filters.oneTransfer, filters.twoTransfers, filters.threeTransfers, dispatch])

  return (
    <div className={classes.filter}>
      <h2 className={classes.filter__title}>Количество пересадок</h2>
      <ul className={classes.filter__list}>
        <li className={classes['filter__list-item']}>
          <label className={classes.filter__label} htmlFor="all">
            <input
              type="checkbox"
              className={classes.filter__checkbox}
              onChange={(e) => onAllInputChange(e)}
              checked={filters.all}
              id="all"
            />
            Все
          </label>
        </li>
        <li className={classes['filter__list-item']}>
          <label className={classes.filter__label} htmlFor="none">
            <input
              type="checkbox"
              className={classes.filter__checkbox}
              onChange={(e) => onInputChange(e, changeNoneTransfersAction)}
              checked={filters.none}
              id="none"
            />
            Без пересадок
          </label>
        </li>
        <li className={classes['filter__list-item']}>
          <label className={classes.filter__label} htmlFor="one">
            <input
              type="checkbox"
              className={classes.filter__checkbox}
              onChange={(e) => onInputChange(e, changeOneTransferAction)}
              checked={filters.oneTransfer}
              id="one"
            />
            1 пересадка
          </label>
        </li>
        <li className={classes['filter__list-item']}>
          <label className={classes.filter__label} htmlFor="two">
            <input
              type="checkbox"
              className={classes.filter__checkbox}
              onChange={(e) => onInputChange(e, changeTwoTransfersAction)}
              checked={filters.twoTransfers}
              id="two"
            />
            2 пересадки
          </label>
        </li>
        <li className={classes['filter__list-item']}>
          <label className={classes.filter__label} htmlFor="three">
            <input
              type="checkbox"
              className={classes.filter__checkbox}
              onChange={(e) => onInputChange(e, changeThreeTransfersAction)}
              checked={filters.threeTransfers}
              id="three"
            />
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Filter
