import React, { Component } from 'react'

const searchDecorator = WrappedComponent => {
  class SearchDecorator extends Component {
    constructor(props) {
      super(props)
      this.handleSearch = this.handleSearch.bind(this)
      this.state = {
        keyword: ''
      }
    }

    handleSearch(e) {
      this.setState({
        keyword: e.target.value
      })
      this.props.onSearch(e)
    }

    render() {
      const { keyword } = this.state

      return (
        <WrappedComponent
          {...this.props}
          data={this.props.data}
          keyword={keyword}
          onSearch={this.handleSearch}
        />
      )
    }
  }

  return SearchDecorator
}

export default searchDecorator