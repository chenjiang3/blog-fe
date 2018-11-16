import { connect } from 'react-redux';
import {fetchArticleList} from "actions/article";
import Articles from "src/components/Articles/Articles";

const mapStateToProps = state => {
  return {
    articleList: state.article.articleList,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticleList: payload => {
      dispatch(fetchArticleList(payload));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);