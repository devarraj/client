import React, { Component } from 'react'

export default class Channel extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
  render() {
    return (
      <div>
        <h2>channel name={this.props.name}</h2>
       <h2>url = {this.props.url}</h2>
       
      </div>
    )
  }
}
