import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, GET_DATA } from './actionTypes'


const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  let newState = { ...state }
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      newState.inputValue = action.value
      return newState
    case ADD_ITEM:
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    case DELETE_ITEM:
      newState.list.splice(action.index, 1)
      return newState
    case GET_DATA:
      newState.list = action.data.list
      newState.inputValue = action.data.inputValue
      return newState
    default:
      return state
  }
}