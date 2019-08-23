import React, {Component} from "react"

import styles from './style.less';

const titles = [
  "json格式化",
  "进制转化",
  "Unix时间戳"
];

export default class Menu extends Component {

  constructor() {
    super();

    this.state = {
      currentIndex: 0,
    };
  }

  onClick(idx) {
    this.setState({
      currentIndex: idx
    });
  }

  renderMenus = () => {
    const currentIdx = this.state.currentIndex || 0;
    return titles.map((item, idx) => {
      const className = currentIdx === idx ? styles.selectedTitle : styles.title;
      return <div key={item} className={className}
                  onClick={e => {
                    this.onClick(idx)
                  }}
      >{item}</div>
    })
  };

  render() {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          {
            this.renderMenus()
          }
        </div>
      </div>
    )
  }

}
