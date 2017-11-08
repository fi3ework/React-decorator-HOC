import React, { Component, PureComponent } from 'react'

class ListComponent extends PureComponent {
  onClick = (e) => {
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

  render() {
    const { data, onClickItem } = this.props
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
            <div>无匹配数据...</div>
        }
      </div>
    )
  }
}

