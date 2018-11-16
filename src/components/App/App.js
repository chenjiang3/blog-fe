import React, { Component } from 'react';
import { BackTop, Col, Layout, Row } from 'antd'

import Nav from 'src/components/Nav/Nav';
import getRouter from 'router/router';
import HeaderDom from "src/components/Layout/Header";

import './style.less';
import Footer from "src/components/Layout/Footer/Footer";

const {Content} = Layout;

export default class App extends Component {

  renderResume = () => {
    const { children } = this.props;
    return <div>{children}</div>
  };

  renderNotResume = () => {
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
    // const isResume = location.pathname === '/resume';
    const isResume = false;
    return !isResume ? this.renderNotResume() : this.renderResume();
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