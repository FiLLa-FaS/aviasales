import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTicketsAction, getSearchIdAction } from '../../store/actions'
import Filter from '../Filter'
import Tabs from '../Tabs'
import CardList from '../CardList'
import iconLogo from '../../assets/icons/logo.svg'

import classes from './App.module.scss'

function App() {
  const dispatch = useDispatch()
  const searchId = useSelector((state) => state.tickets.searchId)

  useEffect(() => {
    dispatch(getSearchIdAction())
  }, [dispatch])

  useEffect(() => {
    dispatch(getTicketsAction(searchId))
  }, [dispatch, searchId])

  return (
    <div className={classes.app}>
      <img src={iconLogo} alt="Логотип" />
      <div className={`${classes.app__layout} ${classes.grid}`}>
        <div className={classes.grid__side}>
          <Filter />
        </div>
        <div className={classes.grid__content}>
          <Tabs />
          <CardList />
        </div>
      </div>
    </div>
  )
}

export default App
