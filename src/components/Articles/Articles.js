import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import {Link} from 'react-router-dom';
import {Card, Pagination} from 'antd';
import {format} from 'src/utils/utils';
import './style.less';

export default class Articles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 1,
      pageSize: 10,
    };
  }

  componentDidMount() {
    this._fetchArticleList();
  }

  _fetchArticleList = () => {
    const {fetchArticleList} = this.props;
    fetchArticleList();
  };

  _onChange = (page, pageSize) => {

  };

  render() {
    const {articleList} = this.props;
    const {articles, total} = articleList || {};
    const {pageIndex, pageSize} = this.state;
    return (
      <div>
        <QueueAnim
          animConfig={[
            {opacity: [1, 0], translateY: [0, 50]},
            {opacity: [1, 0], translateY: [0, -50]},
          ]}
        >
          {
            articles && articles.map(item => (
              <Link to={`/article/${item._id}`}>
                <Card
                  key={`${item._id}-${item.title}`}
                  bordered={false}
                  hoverable={true}
                  className={'article'}
                  type={'inner'}
                >
                  <div>
                    <h3>{item.title}</h3>
                    <p className={'tag'}>
                      <span>发表于：{format(item.create_at)}</span>
                      <span>标签：{item.tag && item.tag.title}</span>
                      <span>浏览：{item.access}</span>
                    </p>
                    <div className={'abstract'}>{item.abstract}...</div>
                    <Link to={`/article/${item._id}`}>
                      <span className={'link'}>阅读原文 >></span>
                    </Link>
                  </div>
                </Card>
              </Link>
            ))
          }
        </QueueAnim>
        <QueueAnim className={'Pagination'} delay={1000}>
          <Pagination
            current={pageIndex}
            pageSize={pageSize}
            total={total}
            onChange={this._onChange}
            key={'pagination'}
          />
        </QueueAnim>
      </div>
    )
  }

}