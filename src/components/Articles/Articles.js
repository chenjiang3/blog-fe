import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import {Link} from 'react-router-dom';
import {Card, Pagination} from 'antd';
import {format} from 'src/utils/utils';
import './style.less';
import Loading from "../Loading/Loading";

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
    fetchArticleList({
      pageIndex: 1,
      pageSize: 100,
    });
  };

  _onChange = (page, pageSize) => {

  };

  render() {
    const {articleList, loading} = this.props;
    const {articles} = articleList || {};
    const total = articles.length;
    const {pageIndex, pageSize} = this.state;
    return (
      <Loading loading={loading}>
        <QueueAnim
          animConfig={[
            {opacity: [1, 0], translateY: [0, 50]},
            {opacity: [1, 0], translateY: [0, -50]},
          ]}
        >
          {
            articles && articles.map(item => (
              <Link to={`/article/${item.id}`}>
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
                      <span>发表于：{format(item.createTime)}</span>
                      <span>标签：{item.tag && item.tags}</span>
                      <span>浏览：{item.access}</span>
                    </p>
                    <div className={'abstract'}>{item.abstractContent}...</div>
                    <Link to={`/article/${item.id}`}>
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
      </Loading>
    )
  }

}