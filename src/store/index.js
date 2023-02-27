import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'

import sortReducer from './sortReducer'
import ticketsReducer from './ticketsReducer'
import transferReducer from './transferReducer'

const rootReducer = combineReducers({
  sort: sortReducer,
  transfer: transferReducer,
  tickets: ticketsReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))

export default store
