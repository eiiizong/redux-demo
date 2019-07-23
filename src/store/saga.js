import {
  put,
  takeEvery,
  // takeLatest 
} from 'redux-saga/effects'
import { GET_DATA } from '../store/actionTypes'

import { getDataAction } from '../store/createActions'
import axios from 'axios'

// const delay = (ms) => new Promise(res => setTimeout(res, ms))

const getTodoList = function* () {
  const res = yield axios.get('https://easy-mock.com/mock/5d09a55b0ac790072280317a/test/')
  const action = getDataAction(res.data.data)
  yield put(action)
}

const mySaga = function* () {
  console.log('mysaga')
  yield takeEvery(GET_DATA, getTodoList)
  // yield getTodoList()
}

export default mySaga