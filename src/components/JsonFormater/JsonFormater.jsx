import React, {Component} from "react"
import ReactJson from 'react-json-view';

import './style.less';

export default class JsonFormater extends Component {

  componentDidMount() {
    this.state = {
      json: {},
      error: null,
    }
  }

  parseJson = (e) => {
    const jsonStr = document.getElementById('id-json-src').value;
    try {
      const obj = JSON.parse(jsonStr);
      this.setState({
        json: obj,
        error: null,
      });
    } catch (e) {
      this.setState({
        error: e,
      });
    }
  };

  formatJson = () => {
    const json = this.state && this.state.json || {};
    const error = this.state && this.state.error;
    if (error) {
      return <div>{error.message}</div>
    }
    return <ReactJson src={json} />
  };

  render() {
    return (
      <div className='container'>
        <div className="left">
                    <textarea
                      id={'id-json-src'}
                      className='json-src'
                      placeholder="在此输入json字符串或XML字符串..."
                      onChange={event => {
                        this.parseJson(event)
                      }}
                    />
        </div>
        <div className="right">
          {this.formatJson()}
        </div>
      </div>
    )
  }

}
