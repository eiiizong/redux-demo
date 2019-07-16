import React, { Component } from 'react'
import axios from 'axios'
import ListUI from './components/ListUI'

import { connect } from 'react-redux'

// import store from './store'

import { changeInputAction, addItemAction, deleteItemAction, getDataAction } from './store/createActions'

class App extends Component {
  componentDidMount () {
    axios.get('https://easy-mock.com/mock/5d09a55b0ac790072280317a/test/').then(res => {
      const data = res.data.data
      const action = getDataAction(data)
      // store.dispatch(action)
    })
  }
  render () {
    return (
      <ListUI {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispachToProps = (dispatch, ownProps) => {
  console.log('ownProps, ', ownProps)
  return {
    clickAddItemButton: () => {
      dispatch(addItemAction())
    },
    changeInputValue: (e) => {
      const value = e.target.value
      dispatch(changeInputAction(value))
    },
    deleteItem: (index) => {
      dispatch(deleteItemAction(index))
    }
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);