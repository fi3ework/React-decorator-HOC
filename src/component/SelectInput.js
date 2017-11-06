import React, { Component } from 'react'
import { Input, Icon } from 'antd'

export default class SelectInput extends Component {
  static displayName = 'SelectInput'

  render() {
    const { text, isActive, onClickHeader, placeholder } = this.props
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
