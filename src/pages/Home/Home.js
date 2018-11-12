import React, { Component } from 'react';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  _handleClick = () => {
    this.setState({
      count: ++this.state.count,
    });
  };

  render() {
    return (
      <div>
        this is Home <br/>
        当前技术： {this.state.count} <br/>
        <button onClick={this._handleClick}>自增</button>
      </div>
    )
  }

}