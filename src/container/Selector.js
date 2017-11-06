import React, { Component } from 'react'

export default class Selector extends Component {
  render() {
    console.log(this.state)
    return (
      <div>
        {
          this.props.children.map((item) => {
            if (item.type.displayName === 'SelectInput') {
              return React.cloneElement(item,
                {
                  key: 'selectInput',
                  text: this.props.selectedItemText
                }
              )
            }

            if (item.type.displayName === 'SearchInput') {
              return React.cloneElement(item,
                {
                  key: 'searchInput',
                  onSearch: this.props.onSearch
                }
              )
            }

            if (item.type.displayName === 'List') {
              console.log(this.props.data)
              if (!(this.props.data && Object.keys(this.props.data).length)) {
                return <div key="list">暂无数据</div>
              }

              let filteredList = this.props.data.filter((name) => {
                let keyword = this.props.keyword
                return keyword === '' || name.indexOf(keyword) >= 0
              })

              if (filteredList.length === 0) {
                return <div>无匹配数据...</div>
              }
              return React.cloneElement(item,
                {
                  key: 'list',
                  data: filteredList,
                  onClickItem: this.props.handleSelectItem
                }
              )
            }
          })
        }
      </div>
    )
  }
}
