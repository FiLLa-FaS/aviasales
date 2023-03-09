const defaultState = {
  tickets: [],
  length: 5,
  searchId: '',
  hasError: false,
  isLoading: false,
}

const ticketsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'GET_SEARCH_ID':
      return { ...state, searchId: action.payload }
    case 'GET_SEARCH_TICKETS':
      return { ...state, tickets: [...state.tickets, ...action.payload] }
    case 'CHANGE_TICKETS_LENGTH':
      return { ...state, length: state.length + 5 }
    case 'HANDLE_DOWNLOAD_TICKETS_ERROR':
      return { ...state, hasError: true }
    case 'HANDLE_LOADING_TICKETS':
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}

export default ticketsReducer
