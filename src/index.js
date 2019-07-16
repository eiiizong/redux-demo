import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'

import store from './store/index'

const rootEl = document.getElementById('root')

const renderDOM = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);

renderDOM()

// store.subscribe(() => {
//   renderDOM()
// })