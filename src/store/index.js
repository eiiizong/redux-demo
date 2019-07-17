import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

import logger from 'redux-logger'

import reduxThunk from 'redux-thunk'

console.log('createStore', createStore)
console.log('thunk', reduxThunk)
console.log('compose', compose)
console.log('compose', compose()(12))
console.log('applyMiddleware', applyMiddleware)

const composeEnHancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [
  reduxThunk,
  logger
]

const store = createStore(
  reducer,
  composeEnHancers(applyMiddleware(...middleware))
)

export default store
