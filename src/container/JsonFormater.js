import { connect } from 'react-redux';
import JsonFormater from 'src/components/JsonFormater/JsonFormater';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(JsonFormater)
);

