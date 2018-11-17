import React, {Component} from 'react';
import {Timeline, Pagination} from 'antd';
import QueueAnim from 'rc-queue-anim';
import './style.less';

const Item = Timeline.Item;

export default class Say extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 1,
      pageSize: 10,
    };
  }

  componentDidMount() {
    const {
      fetchSayList,
    } = this.props;
    fetchSayList();
  }

  _onChange = () => {

  };

  _onShowSizeChange = () => {

  };

  render() {
    const {
      sayList: {
        say,
        total,
      }
    } = this.props;
    const {
      pageIndex,
      pageSize,
    } = this.state;
    return (
      <div className={'time-line-wrp'}>
        <div className={'time-line'}>
          <Timeline key={'Timeline'}>
            {
              say && say.map(item => (
                <Item key={item._id}>
                  <QueueAnim
                    animConfig={[
                      {opacity: [1, 0], translateX: [0, -150]},
                      {opacity: [1, 0], translateX: [0, 150]},
                    ]}
                    duration={1500}
                  >
                    <div className={'item'} key={item._id}>
                      <div dangerouslySetInnerHTML={{__html: item.say}}/>
                      <span className={'posted'}>
                        发表于：{new Date(item.create_at).toLocaleString()}
                      </span>
                    </div>
                  </QueueAnim>
                </Item>
              ))
            }
            <QueueAnim className={'pagination'} delay={1000}>
              <Pagination
                current={pageIndex}
                pageSize={pageSize}
                total={total}
                key={'pagination'}
                showSizeChange={true}
                onChange={ this._onChange}
                onShowSizeChange={this._onShowSizeChange}
              />
            </QueueAnim>
          </Timeline>
        </div>
      </div>
    )
  }

}