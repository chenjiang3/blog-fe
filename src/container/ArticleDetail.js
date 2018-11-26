import {connect} from 'react-redux';
import {ARTICLE_ADD_ACCESS, fetchArticleDetail} from "actions/article";
import ArticleDetail from "src/components/ArticleDetail/ArticleDetail";

const mapStateToProps = state => {
  return {
    article: state.article.article,
    loading: state.article.loading,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticleDetail: payload => { dispatch(fetchArticleDetail(payload)) },
    increaseAccess: payload => { dispatch({
      type: ARTICLE_ADD_ACCESS,
      payload,
    })}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleDetail);

