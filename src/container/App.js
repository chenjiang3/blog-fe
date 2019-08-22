import { connect } from 'react-redux';
import App from 'src/components/App/App';
import {withRouter} from 'react-router-dom';
import {USER_AUTHOR_INFO_REQ} from "actions/user";
import {FETCH_ARTICLE_LIST} from "actions/article";
import {TAG_LIST_REQUEST} from "actions/tag";

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App)
);

