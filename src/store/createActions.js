import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, GET_DATA } from './actionTypes'
import axios from 'axios'

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
    axios.get('https://easy-mock.com/mock/5d09a55b0ac790072280317a/test/').then(res => {
      const data = res.data.data
      console.log(data)
      dispatch(getDataAction(data))
    }).catch(err => {
      console.error(err)
    })
  }
}

export {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getDataAction,
  getDataAsyncAction
}
