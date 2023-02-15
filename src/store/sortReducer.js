const defaultState = {
  sort: '',
}

const sortReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_SORT':
      return { ...state, sort: action.payload }
    default:
      return state
  }
}

export default sortReducer
