import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, GET_DATA } from './actionTypes'

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


export {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getDataAction
}
