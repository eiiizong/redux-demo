import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import mySaga from './saga'

// console.log('createStore', createStore)
// console.log('thunk', thunk)
// console.log('compose', compose)
// console.log('compose', compose()(12))
// console.log('applyMiddleware', applyMiddleware)

const composeEnHancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddlewae = createSagaMiddleware()
const middlewares = [
  logger,
  sagaMiddlewae
]

const store = createStore(
  reducer,
  composeEnHancers(applyMiddleware(...middlewares))
)
sagaMiddlewae.run(mySaga)

export default store
