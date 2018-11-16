import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchArticleDetail} from "actions/article";
import ArticleDetail from "src/components/ArticleDetail/ArticleDetail";

const mapStateToProps = state => {
  return {
    article: state.article.article,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticleDetail: payload => { dispatch(fetchArticleDetail(payload)) }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleDetail);

