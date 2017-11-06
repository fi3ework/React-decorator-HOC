import React, { Component } from 'react'
import searchDecorator from './container/searchDecorator'
import asyncSelectDecorator from './container/asyncSelectDecorator'
import selectedItemDecorator from './container/selectedItemDecorator'
import { compose } from 'redux'
import 'antd/dist/antd.css'
import Selector from './container/Selector'
import List from './component/List'
import SearchInput from './component/SearchInput'
import SelectInput from './component/SelectInput'

const FinalSelector = compose(asyncSelectDecorator, selectedItemDecorator, searchDecorator)(Selector)

class SearchSelect extends Component {
  render() {
    return (
      <FinalSelector {...this.props}>
        <SelectInput />
        <SearchInput />
        <List />
      </FinalSelector>
    )
  }
}

class App extends Component {
  render() {
    return (
      <SearchSelect
        onSearch={(e) => { console.log(e.target.value) }}
        onClick={(text) => { console.log(text) }}
        url="/v2/movie/in_theaters"
      />
    )
  }
}

export default App
