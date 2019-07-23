import React, { Component } from 'react'

import ListUI from './components/ListUI'

import { connect } from 'react-redux'

import { getDataAsyncAction, changeInputAction, addItemAction, deleteItemAction } from './store/createActions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRequest: false
    }
  }
  componentDidMount () {
    console.log('this props', this.props)
    if (!this.state.isRequest) {
      this.props.getDataAsync()
      this.setState({
        isRequest: true
      })
    }
  }
  render () {
    return (
      <ListUI {...this.props} />
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  // console.log(ownProps) // {}
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispachToProps = (dispatch) => {
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
    getDataAsync: () => {
      dispatch(getDataAsyncAction())
    }
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);