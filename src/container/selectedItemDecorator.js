import React, { Component } from 'react'

const selectedItemDecorator = WrappedComponent => {
  class SelectedItemDecorator extends Component {
    constructor(props) {
      super(props)
      this.handleSelectItem = this.handleSelectItem.bind(this)
      this.state = {
        selectedItemText: ''
      }
    }

    handleSelectItem(text) {
      this.setState(
        this.setState({
          selectedItemText: text
        })
      )
      this.props.onClick(text)
    }


    render() {
      return (
        <WrappedComponent
          {...this.props}
          handleSelectItem={this.handleSelectItem}
          selectedItemText={this.state.selectedItemText}
        />
      )
    }
  }

  return SelectedItemDecorator
}

export default selectedItemDecorator