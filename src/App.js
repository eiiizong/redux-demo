import React, { Component } from 'react'

import ListUI from './components/ListUI'

import { connect } from 'react-redux'

import { changeInputAction, addItemAction, deleteItemAction, getDataAsyncAction } from './store/createActions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount () {
    this.props.dispatch(getDataAsyncAction())
  }
  render () {
    return (
      <ListUI {...this.props} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispachToProps = (dispatch, ownProps) => {
  // console.log('ownProps, ', ownProps)
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
    },
    dispatch
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);