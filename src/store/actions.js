import { getSearchId, getSearchTickets } from '../services/apiService'

export const changeSortAction = (payload) => ({ type: 'CHANGE_SORT', payload })

export const disableTransfersAction = () => ({ type: 'DISABLE_TRANSFERS' })
export const setAllTransfersAction = () => ({ type: 'SET_ALL_TRANSFERS' })
export const disableAllTransfersAction = () => ({ type: 'DISABLE_ALL_TRANSFERS' })
export const changeNoneTransfersAction = (payload) => ({ type: 'CHANGE_NONE_TRANSFERS', payload })
export const changeOneTransferAction = (payload) => ({ type: 'CHANGE_ONE_TRANSFER', payload })
export const changeTwoTransfersAction = (payload) => ({ type: 'CHANGE_TWO_TRANSFERS', payload })
export const changeThreeTransfersAction = (payload) => ({ type: 'CHANGE_THREE_TRANSFERS', payload })

export function getTickets() {
  return async function getTicketsCreator(dispatch) {
    try {
      const id = await getSearchId()
      const tickets = await getSearchTickets(id)
      const res = await dispatch({ type: 'GET_SEARCH_TICKETS', payload: tickets })
      return res
    } catch (error) {
      console.log(error)
    }
    return false
  }
}

export const changeTicketsLengthAction = () => ({ type: 'CHANGE_TICKETS_LENGTH' })
