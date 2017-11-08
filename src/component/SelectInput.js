import React, { Component, PureComponent } from 'react'
import { Input } from 'antd'

export default class SelectInput extends PureComponent {
  static displayName = 'SelectInput'

  render() {
    const { text, onClickHeader, placeholder } = this.props
    return (
      <div>
        <p>SelectInput</p>
        <div onClick={onClickHeader}>
          <Input
            type="text"
            disabled
            value={text}
            placeholder={placeholder}
            style={{
              width: 200
            }}
          />
        </div>
      </div>
    )
  }
}
