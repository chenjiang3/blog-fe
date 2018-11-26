import { connect } from 'react-redux';
import App from 'src/components/App/App';
import {USER_AUTHOR_INFO_REQ} from "actions/user";
import {FETCH_ARTICLE_LIST} from "actions/article";

const mapStateToProps = state => {
  return {
    authorInfo: state.user.authorInfo,
    articleList: state.article.articleList,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAuthorInfo: payload => {
      dispatch({
        type: USER_AUTHOR_INFO_REQ,
        payload,
      })
    },
    latestArticles: payload => {
      dispatch({
        type: FETCH_ARTICLE_LIST,
        payload,
      })
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

