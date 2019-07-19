import { put, call } from 'redux-saga/effects'
import { GET_DATA } from '../store/actionTypes'
// import axios from 'axios'

const delay = (ms) => new Promise(res => setTimeout(res, ms))


const mySaga = function* () {
  yield delay(0)
  yield put({ type: 'request-start' })
  const data = yield call(fetch, 'https://easy-mock.com/mock/5d09a55b0ac790072280317a/test/')
  console.log(data)
  yield put({ type: GET_DATA, data })
}

export default mySaga