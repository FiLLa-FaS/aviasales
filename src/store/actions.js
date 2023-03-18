/* eslint-disable no-await-in-loop */
import { getSearchId, getSearchTickets } from '../services/apiService'

export const changeSortAction = (payload) => ({ type: 'CHANGE_SORT', payload })

export const disableTransfersAction = () => ({ type: 'DISABLE_TRANSFERS' })
export const setAllTransfersAction = () => ({ type: 'SET_ALL_TRANSFERS' })
export const disableAllTransfersAction = () => ({ type: 'DISABLE_ALL_TRANSFERS' })
export const changeNoneTransfersAction = (payload) => ({ type: 'CHANGE_NONE_TRANSFERS', payload })
export const changeOneTransferAction = (payload) => ({ type: 'CHANGE_ONE_TRANSFER', payload })
export const changeTwoTransfersAction = (payload) => ({ type: 'CHANGE_TWO_TRANSFERS', payload })
export const changeThreeTransfersAction = (payload) => ({ type: 'CHANGE_THREE_TRANSFERS', payload })

export const handleLoadingTicketsAction = (payload) => ({ type: 'HANDLE_LOADING_TICKETS', payload })
export const handleDownloadTicketsErrorAction = (payload) => ({ type: 'HANDLE_DOWNLOAD_TICKETS_ERROR', payload })

export function getSearchIdAction() {
  return async function getSearchIdCreator(dispatch) {
    try {
      const id = await getSearchId()
      const res = await dispatch({ type: 'GET_SEARCH_ID', payload: id.searchId })
      return res
    } catch (error) {
      throw new Error(error)
    }
  }
}

let counter = 0

export function getTicketsAction(searchId) {
  return async function getTicketsCreator(dispatch) {
    try {
      let stop = false
      if (searchId === '') {
        return false
      }
      if (!stop) {
        dispatch(handleLoadingTicketsAction(true))
      }
      while (!stop) {
        const ticketsPack = await getSearchTickets(searchId)
        counter = 0
        dispatch({ type: 'GET_SEARCH_TICKETS', payload: ticketsPack.tickets })
        stop = ticketsPack.stop
      }
      if (stop) {
        dispatch(handleLoadingTicketsAction(false))
        return false
      }
    } catch (error) {
      if (counter === 3) {
        dispatch(handleLoadingTicketsAction(false))
        dispatch(handleDownloadTicketsErrorAction(true))
        return false
      }
      counter += 1
      await dispatch(getTicketsAction(searchId))
    }
    return false
  }
}

export const changeTicketsLengthAction = () => ({ type: 'CHANGE_TICKETS_LENGTH' })
