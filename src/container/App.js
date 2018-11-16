import { connect } from 'react-redux';
import App from 'src/components/App/App';

const mapStateToProps = (info) => {
  return {
    info,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    // MARK: TODO
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

