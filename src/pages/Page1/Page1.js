import React, { Component } from 'react';
import './Page1.css';

import image from './rose.jpg';

export default class Page1 extends Component {

  render() {
    return (
      <div className={'page-box'}>
        this is Page1~
        <img src={image}/>
      </div>
    )
  }

}