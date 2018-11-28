import { connect } from 'react-redux';
import App from 'src/components/App/App';
import {withRouter} from 'react-router-dom';
import {USER_AUTHOR_INFO_REQ} from "actions/user";
import {FETCH_ARTICLE_LIST} from "actions/article";
import {TAG_LIST_REQUEST} from "actions/tag";

const mapStateToProps = state => {
  return {
    authorInfo: state.user.authorInfo,
    articleList: state.article.articleList,
    tagList: state.tag.list.data,
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
    fetchTagList: payload => {
      dispatch({
        type: TAG_LIST_REQUEST,
        payload,
      })
    }
  }
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App)
);

