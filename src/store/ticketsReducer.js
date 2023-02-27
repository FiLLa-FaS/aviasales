const defaultState = {
  tickets: [],
  length: 5,
}

const ticketsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'GET_SEARCH_TICKETS':
      return { ...state, tickets: action.payload }
    case 'CHANGE_TICKETS_LENGTH':
      return { ...state, length: state.length + 5 }
    default:
      return state
  }
}

export default ticketsReducer
