import React, {Component} from 'react';
import {Spin} from 'antd';

export default class Loading extends Component {

  render() {
    const {
      loading = false,
    } = this.props;
    return (
      <div>
        <Spin size='large' spinning={loading}>
          {this.props.children}
        </Spin>
      </div>
    );
  }

}