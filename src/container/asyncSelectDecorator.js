import React, { Component } from 'react'

const asyncSelectDecorator = WrappedComponent => {
  class AsyncSelectDecorator extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: {}
      }
    }


    componentDidMount = () => {
      const { url, params } = this.props
      fetch(url).then((response) => {
        if (response.status !== 200) {
          throw new Error('Fail to get response with status:' + response.status)
        }
        response.json().then((response) => {
          let movieList = response.subjects.map(item => item.title)
          console.log(movieList)
          this.setState({
            data: movieList
          })
        }).catch((error) => {
          throw new Error('Invalid json response: ' + error)
        })
      })
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          data={this.state && this.state.data}
        />
      )
    }
  }

  return AsyncSelectDecorator
}

export default asyncSelectDecorator