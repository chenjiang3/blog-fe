import React, {Component} from 'react';
import {Card} from 'antd';
import Highlight from 'react-highlight';

import marked from 'marked';

import './style.less';
import './highlight.less';
import {format} from "../../utils/utils";
import Loading from "../Loading/Loading";

export default class ArticleDetail extends Component {

  componentDidMount() {
    const {
      increaseAccess,
      fetchArticleDetail,
      match: {params: id}
    } = this.props;
    increaseAccess({...id});
    fetchArticleDetail({...id});
  }

  _addCode = content => {
    return content.replace(new RegExp('<pre>', 'g'), '<pre><code>')
      .replace(new RegExp('</pre>', 'g'), '</code></pre>');
  };

  render() {
    const {article, loading} = this.props;
    const {
      title = '',
      createTime,
      access,
      type,
      content = '',
      tags
    } = article || {};
    return (
      <Loading loading={loading}>
        <div className={'article'}>
          <Card hoverable={true} bordered={false} className={'article'}>
            <div>
              <h3>{title}</h3>
              <div className={'tag'}>
                <span>发表于：{format(createTime)}</span>
                <span>分类：{type}</span>
                <span>标签：{tags}</span>
                <span>浏览：{access}</span>
              </div>
            </div>
            <Highlight innerHTML={true} className={'javascript'}>
              {this._addCode(marked(content))}
            </Highlight>
          </Card>
        </div>
      </Loading>
    )
  }

}