import TimeFile from 'src/components/TimeFile/TimeFile';
import {connect} from 'react-redux';
import {fetchTimeFileList} from "actions/timefile";
const mapStateToProps = state => {
  return {
    timeFileList: state.timeFile.timeFileList,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTimeFileList: payload => dispatch(fetchTimeFileList(payload))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeFile);