import React, { Component, PureComponent } from 'react'
import { Input } from 'antd'

export default class SearchInput extends PureComponent {
  static displayName = 'SearchInput'

  render() {
    const { onSearch, placeholder } = this.props
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
