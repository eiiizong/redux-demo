import React, { Component } from 'react'
import axios from 'axios'
import ListUI from './components/ListUI'

import store from './store'
import { changeInputAction, addItemAction, deleteItemAction, getDataAction } from './store/createActions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.updataState = this.updataState.bind(this)
    this.changeInputValue = this.changeInputValue.bind(this)
    this.clickAddItemButton = this.clickAddItemButton.bind(this)
    store.subscribe(this.updataState)
  }
  componentDidMount () {
    axios.get('https://easy-mock.com/mock/5d09a55b0ac790072280317a/test/').then(res => {
      const data = res.data.data
      const action = getDataAction(data)
      store.dispatch(action)
    })
  }
  render () {
    const { list } = this.state
    return (
      <ListUI
        list={list}
        changeInputValue={this.changeInputValue}
        inputValue={this.state.inputValue}
        clickAddItemButton={this.clickAddItemButton}
        deleteItem={this.deleteItem}
      />
    )
  }

  updataState () {
    const { inputValue, list } = store.getState()
    this.setState({
      inputValue,
      list
    })
  }

  changeInputValue (e) {
    const value = e.target.value
    const action = changeInputAction(value)
    store.dispatch(action)
  }

  clickAddItemButton () {
    if (this.state.inputValue !== '') {
      const action = addItemAction()
      store.dispatch(action)
    }
  }

  deleteItem (index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}

export default App;