import { legacy_createStore as createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import sortReducer from './sortReducer'
import transferReducer from './transferReducer'

const rootReducer = combineReducers({
  sort: sortReducer,
  transfer: transferReducer,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
