import React, {Component} from 'react';
import './style.less';

export default class Footer extends Component {

  render() {
    return (
      <div className={'footer'}>
        <div className={'item'}>All Rights Reserved</div>
        <div className={'item'}>感谢开源世界提供的技术支持</div>
      </div>
    )
  }

}