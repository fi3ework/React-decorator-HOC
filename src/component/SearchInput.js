import React, { Component } from 'react'
import { Input, Icon } from 'antd'

export default class SearchInput extends Component {
  static displayName = 'SearchInput'

  render() {
    const { isActive, onSearch, placeholder } = this.props
    return (
      <div>
        <p>SearchSelect</p>
        <div>
          <Input
            type="text"
            placeholder={placeholder}
            onChange={onSearch}
            style={{
              width: 200
            }}
          />
        </div>
      </div>
    )
  }
}
