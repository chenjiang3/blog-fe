import React, { Component } from 'react';
import { Card, Tooltip, Tag } from 'antd';
import {Link} from 'react-router-dom';

import './style.less';

const {Meta} = Card;

const headerImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542361204884&di=cb9d84f47ae4de1f42b3f62f94124a32&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd50735fae6cd7b89d6cf9d40052442a7d8330e55.jpg';
const authImg = 'https://avatars1.githubusercontent.com/u/5626978?s=460&v=4';

const tags = [
  {
    title: 'react',
    color: '#ff0000'
  },
  {
    title: 'c++',
    color: '#ff0099'
  }
];

const lastArticle = [
  {
    id: 1,
    title: 'xxxxxx1',
  },
  {
    id: 2,
    title: '222222'
  }
];

export default class SlideBar extends Component {

  _renderInfo = () => {
    const {
      authorInfo: {
        data: author = {}
      },
    } = this.props;
    return (
      <Card hoverable={true} className={'card'} cover={<img src={headerImg} /> }>
        <div className={'authorImg'}>
          <img src={author.headerSrc || ''} alt={''}/>
        </div>
        <Meta
          title={
            <div>
              <span className={'card-title'}>{author.userName || ''}</span>
            </div>
          }
          description={
            <div>
              <p className={'abstract'}>{author.brief || ''}</p>
              <p className={'abstract'}>
                <span>文章 - {10}</span>
                <span style={{marginRight: 10, marginLeft: 10}}>|</span>
                <span>访问 - {author.access || 0}</span>
              </p>
            </div>
          }
        />
      </Card>
    )
  };

  _renderFollowMe = () => {
    return (
      <Card title={'FOLLOW ME'} hoverable={true} className={'card'}>
        <div className={'icon-git-wrp'}>
          <div className={'call'} style={{marginLeft: 'auto', marginRight: 'auto'}}>
            {/*<Tooltip title={'个人简历'}>*/}
              {/*<Link to={'/resume'}>&#xe60e;</Link>*/}
            {/*</Tooltip>*/}
            <Tooltip>
              <a href={'https://github.com/chenjiang3'} target={'view_window'}>
                &#xea0a;
              </a>
            </Tooltip>
            <Tooltip
              title={
                <img
                  className={'wx'}
                  src={'https://raw.githubusercontent.com/chenjiang3/chenjiang-res/master/img/WechatIMG92.jpeg'}
                  alt={'微信'}
                  width={100}
                  height={100}
                  />
              }
            >
              <a>&#xe7e5;</a>
            </Tooltip>
            {/*<Tooltip title={'QQ'}>*/}
              {/*<a*/}
                {/*href={'https://www.zhihu.com/people/fan-xing-yu-8/activities'}*/}
                {/*target={'view_window'}*/}
              {/*>*/}
                {/*&#xe676;*/}
              {/*</a>*/}
            {/*</Tooltip>*/}
          </div>
        </div>
      </Card>
    )
  };

  _renderTags = () => {
    return (
      <Card title={'云标签'} hoverable={true} className={'card'}>
        {
          tags &&
            tags.map(item => (
              <Tag
                key={item.title}
                color={item.color}
                className={'tag'}
                onClick={() => {
                }}
              >
                <Link to={'/'}>{item.title}</Link>
              </Tag>
            ))
        }
      </Card>
    )
  };

  _renderArticleList = () => {
    const {
      articleList: {
        articles
      }
    } = this.props;

    return (
      <Card title={'最新文章'} hoverable={true} className={'card'}>
        <ul>
          {
            articles &&
              articles.map((item, index) => (
                <li key={index} className={'tag'}>
                  <Link to={`/articles/${item.id}`}>{item.title}</Link>
                </li>
              ))
          }
        </ul>
      </Card>
    )
  };

  render() {
    return (
      <div className={'Sidebar'}>
        { this._renderInfo() }
        { this._renderFollowMe() }
        { this._renderTags() }
        { this._renderArticleList() }
      </div>
    )
  }

}