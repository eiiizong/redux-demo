import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, GET_DATA } from './actionTypes'
import axios from '../utils/axios'

const changeInputAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}
const addItemAction = () => {
  return {
    type: ADD_ITEM
  }
}
const deleteItemAction = (index) => {
  return {
    type: DELETE_ITEM,
    index
  }
}

const getDataAction = (data) => {
  return {
    type: GET_DATA,
    data
  }
}


const getDataAsyncAction = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: 'request' })
    const success = (data) => dispatch(getDataAction(data))
    const fail = (err) => dispatch({ type: 'error' })
    axios('', success, fail)
  }
}

export {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getDataAction,
  getDataAsyncAction
}
