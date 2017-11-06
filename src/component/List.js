import React, { Component } from 'react'
import { Button, Col, Row } from 'antd'

class ListComponent extends Component {

  onClick = (e) => {
    console.log(this.props.text)
    this.props.onClick(this.props.text)
  }

  render() {
    return (
      <div
        onClick={this.onClick}
        style={{
          border: '1px solid #ccc',
          width: 200,
          borderRadius: 3,
          margin: '2px 0'
        }}
      >
        {this.props.text}
      </div>
    )
  }
}



export default class List extends Component {
  static displayName = 'List'

  xx = (e) => {
    console.log(e.target)
  }


  render() {
    const { isActive, data, onClickItem } = this.props
    console.log(this.props)

    return (
      <div>
        <p>List</p>
        {
          data && Object.keys(data).length ?
            data.map((item, index) => {
              return (
                <ListComponent
                  key={index}
                  onClick={onClickItem}
                  text={item}
                />
              )
            }) :
            null
        }
      </div>
    )
  }
}

