const defaultState = {
  all: true,
  none: true,
  oneTransfer: true,
  twoTransfers: true,
  threeTransfers: true,
}

const transferReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'DISABLE_TRANSFERS':
      return {
        ...state,
        all: false,
        none: false,
        oneTransfer: false,
        twoTransfers: false,
        threeTransfers: false,
      }
    case 'SET_ALL_TRANSFERS':
      return {
        ...state,
        all: true,
        none: true,
        oneTransfer: true,
        twoTransfers: true,
        threeTransfers: true,
      }
    case 'DISABLE_ALL_TRANSFERS':
      return {
        ...state,
        ...state.transfer,
        all: false,
      }
    case 'CHANGE_NONE_TRANSFERS':
      return {
        ...state,
        ...state.transfer,
        none: action.payload,
      }
    case 'CHANGE_ONE_TRANSFER':
      return {
        ...state,
        ...state.transfer,
        oneTransfer: action.payload,
      }
    case 'CHANGE_TWO_TRANSFERS':
      return {
        ...state,
        ...state.transfer,
        twoTransfers: action.payload,
      }
    case 'CHANGE_THREE_TRANSFERS':
      return {
        ...state,
        ...state.transfer,
        threeTransfers: action.payload,
      }
    default:
      return state
  }
}

export default transferReducer
