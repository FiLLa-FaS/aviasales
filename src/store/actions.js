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
export const handleDownloadTicketsErrorAction = () => ({ type: 'HANDLE_DOWNLOAD_TICKETS_ERROR' })

export function getSearchIdAction() {
  return async function getSearchIdCreator(dispatch) {
    try {
      const id = await getSearchId()
      const res = await dispatch({ type: 'GET_SEARCH_ID', payload: id.searchId })
      return res
    } catch (error) {
      console.log(error)
    }
    return false
  }
}

export function getTicketsAction(searchId, maxAttempts) {
  return async function getTicketsCreator(dispatch) {
    try {
      let stop = false
      if (searchId === '') {
        return false
      }
      await dispatch(handleLoadingTicketsAction(true))
      while (stop === false) {
        const ticketsPack = await getSearchTickets(searchId)
        await dispatch({ type: 'GET_SEARCH_TICKETS', payload: ticketsPack.tickets })
        stop = ticketsPack.stop
      }
    } catch (error) {
      if (maxAttempts === 1) {
        await dispatch(handleLoadingTicketsAction(false))
        await dispatch(handleDownloadTicketsErrorAction(false))
      } else {
        return getTicketsAction(searchId, maxAttempts - 1)
      }
    }
    await dispatch(handleLoadingTicketsAction(false))
    return false
  }
}

export const changeTicketsLengthAction = () => ({ type: 'CHANGE_TICKETS_LENGTH' })

// const getTickets = async (searchId) => {
//   const ticketsResult = []
//   console.log(ticketsResult)
//   try {
//     const ticketsResponse = await getSearchTickets(searchId)
//     const { tickets, stop } = await ticketsResponse.json()
//     ticketsResult.push(...tickets)
//     console.log(ticketsResult)
//     if (!stop) {
//       ticketsResult.push(...(await getTickets(searchId)))
//       console.log(ticketsResult)
//     }
//   } catch (e) {
//     ticketsResult.push(...(await getTickets(searchId)))
//     console.log(ticketsResult)
//   }
//   return ticketsResult
// }

// export function getTicketsAction(searchId) {
//   return async function getTicketsCreator(dispatch) {
//     if (searchId === '') {
//       return false
//     }
//     const res = await getTickets(searchId)
//     await dispatch({ type: 'GET_SEARCH_TICKETS', payload: res })
//     return false
//   }
// }
