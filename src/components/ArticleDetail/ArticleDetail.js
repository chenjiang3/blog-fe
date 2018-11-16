import React, {Component} from 'react';
import {Card} from 'antd';
import Highlight from 'react-highlight';

import './style.less';
import './highlight.less';
import {format} from "../../utils/utils";

export default class ArticleDetail extends Component {

  componentDidMount() {
    const {fetchArticleDetail, match:{params: id}} = this.props;
    fetchArticleDetail({...id});
  }

  _addCode = content => {
    return content.replace(new RegExp('<pre>', 'g'), '<pre><code>')
      .replace(new RegExp('</pre>', 'g'), '</code></pre>');
  };

  render() {
    const {article} = this.props;
    const {
      title = '',
      create_at,
      access,
      type,
      content = '',
      tag = { title: '' }
    } = article || {};
    return (
      <div className={'article'}>
        <Card hoverable={true} bordered={false} className={'article'}>
          <div>
            <h3>{title}</h3>
            <div className={'tag'}>
              <span>发表于：{format(create_at)}</span>
              <span>分类：{type}</span>
              <span>标签：{tag.title}</span>
              <span>浏览：{access}</span>
            </div>
          </div>
          <Highlight innerHTML={true} className={'javascript'}>
            {this._addCode(content)}
          </Highlight>
        </Card>
      </div>
    )
  }

}