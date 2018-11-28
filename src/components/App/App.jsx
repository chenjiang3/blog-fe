import React, { Component } from 'react';
import { BackTop, Col, Layout, Row } from 'antd'

import HeaderDom from "src/components/Layout/Header/Header";

import './style.less';
import Footer from "src/components/Layout/Footer/Footer";
import SlideBar from "../Layout/SlideBar/SlideBar";

const {Content} = Layout;

export default class App extends Component {

  componentDidMount() {
    const {
      fetchAuthorInfo,
      latestArticles,
      fetchTagList,
    } = this.props;
    fetchAuthorInfo && fetchAuthorInfo();
    latestArticles && latestArticles({
      pageIndex: 1,
      pageSize: 10,
    });
    fetchTagList && fetchTagList();
  }

  _renderMgt = () => {
    const { children } = this.props;
    return <div>{'mgt'}</div>
  };

  _renderWeb = () => {
    const {children} = this.props;
    return (
      <Layout>
        <BackTop />
        <HeaderDom />
        <Layout>
          <Content>
            <Row>
              <Col xs={1} sm={1} md={1} lg={1} xl={3} xxl={5} />
              <Col xs={22} sm={22} md={22} lg={20} xl={18} xxl={14}>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17}>
                    {children}
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={{span: 6, offset: 1}}
                    xl={{span: 6, offset: 1}}
                    xxl={{span: 6, offset: 1}}
                  >
                    <SlideBar {...this.props}/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Content>
        </Layout>
        <Footer/>
      </Layout>
    )
  };

  render() {
    const {location} = this.props;
    const isMgt = location.pathname === '/mgt';
    if (isMgt) {
      return this._renderMgt();
    }
    return this._renderWeb();
  }

  // render() {
  //   const {location} = this.props;
  //   const isResume = location.pathname === '/resume';
  //   return (
  //     <div>
  //       <Nav/>
  //       {getRouter()}
  //     </div>
  //   )
  // }

}