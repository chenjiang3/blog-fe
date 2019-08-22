import { Col, Dropdown, Icon, Input, Layout, Menu, Row } from 'antd';
import React, { Component, PureComponent } from 'react';
import {Link} from 'react-router-dom';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import 'rc-texty/assets/index.css';

import './style.less';

const { Header } = Layout;
const { Search } = Input;

const getInterval = e => {
  switch (e.index) {
    case 0:
      return 0;
    case 1:
      return 150;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return 150 + 450 + (e.index -2) * 10;
    default:
      return 150 + 450 + (e.index - 6) * 150;
  }
};

const getEnter = (e) => {
  const t = {
    opacity: 0,
    scale: 0.8,
    y: '-100%'
  };
  if (e.index >= 2 && e.index <= 6) {
    return { ...t, y: '-30%', duration: 150 }
  }
  return t;
};

const getSplit = e => {
  const t = e.split(' ');
  const c = [];
  t.forEach((str, i) => {
    c.push(<span key={`${str}-${i}`}>{str}</span>);
    if (i < t.length - 1) {
      c.push(<span key={` -${i}`}/>);
    }
  });
  return c;
};


const headerTitle = [
  { title: '主页', icon: { __html: '&#xe600;' }, url: '/' },
  // { title: '归档', icon: { __html: '&#xe660;' }, url: '/time-file' },
  { title: '关于', icon: { __html: '&#xe6a1;' }, url: '/about' },
  // { title: '收藏', icon: { __html: '&#xe60e;' }, url: '/collect' }
];

const menu = (
  <Menu className='menu'>
    {
      headerTitle.map(item => (
        <Menu.Item key={item.title} className='header-title-item'>
          <Link to={item.url}>
            <span className='icon-font'
              style={{marginRight: 5}}
              dangerouslySetInnerHTML={item.icon} />
            {item.title}
          </Link>
        </Menu.Item>
      ))
    }
  </Menu>
);

export default class HeaderDom extends PureComponent {

  render() {
    return (
      <div className='header-container'>
        <div className='simple'/>
        <div className='fancy'/>
      </div>
    )
  }

}