import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, GET_DATA } from './actionTypes'


const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value
      }
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, state.inputValue],
        inputValue: ''
      }
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter((item, index) => {
          return index !== action.index
        })
      }
    case GET_DATA:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}