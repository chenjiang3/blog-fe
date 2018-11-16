import React, { Component } from 'react';
import './index.css';

import image from './rose.jpg';

export default class Page1 extends Component {

  render() {
    return (
      <div className='nick'>
        this is Page1~
        <img src={image}/>
      </div>
    )
  }

}