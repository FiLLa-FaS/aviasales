const defaultState = {
  transfer: {
    all: false,
    none: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
}

const transferReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'DISABLE_TRANSFERS':
      return {
        ...state,
        transfer: { all: false, none: false, oneTransfer: false, twoTransfers: false, threeTransfers: false },
      }
    case 'SET_ALL_TRANSFERS':
      return {
        ...state,
        transfer: { all: true, none: true, oneTransfer: true, twoTransfers: true, threeTransfers: true },
      }
    case 'DISABLE_ALL_TRANSFERS':
      return {
        ...state,
        transfer: { ...state.transfer, all: false },
      }
    case 'CHANGE_NONE_TRANSFERS':
      return {
        ...state,
        transfer: { ...state.transfer, none: action.payload },
      }
    case 'CHANGE_ONE_TRANSFER':
      return {
        ...state,
        transfer: { ...state.transfer, oneTransfer: action.payload },
      }
    case 'CHANGE_TWO_TRANSFERS':
      return {
        ...state,
        transfer: { ...state.transfer, twoTransfers: action.payload },
      }
    case 'CHANGE_THREE_TRANSFERS':
      return {
        ...state,
        transfer: { ...state.transfer, threeTransfers: action.payload },
      }
    default:
      return state
  }
}

export default transferReducer
