import React, { Component } from 'react'

export default class Selector extends Component {
  render() {
    return (
      <div>
        {
          this.props.children.map((item) => {
            // SelectInput
            if (item.type.displayName === 'SelectInput') {
              return React.cloneElement(item,
                {
                  key: 'selectInput',
                  text: this.props.selectedItemText
                }
              )
            }
            // SearchInput
            if (item.type.displayName === 'SearchInput') {
              return React.cloneElement(item,
                {
                  key: 'searchInput',
                  onSearch: this.props.onSearch,
                  placeholder: this.props.searchPlaceholder
                }
              )
            }
            // List
            if (item.type.displayName === 'List') {
              if (!(this.props.data && Object.keys(this.props.data).length)) {
                return <div key="list">暂无数据</div>
              }

              let filteredList = this.props.data.filter((name) => {
                let keyword = this.props.keyword
                return keyword === '' || name.indexOf(keyword) >= 0
              })

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
