import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

import logger from 'redux-logger'

import thunk from 'redux-thunk'

// console.log('createStore', createStore)
// console.log('thunk', thunk)
// console.log('compose', compose)
// console.log('compose', compose()(12))
// console.log('applyMiddleware', applyMiddleware)

const composeEnHancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [
  logger,
  thunk
]

const store = createStore(
  reducer,
  composeEnHancers(applyMiddleware(...middlewares))
)

export default store
