import {connect} from 'react-redux';
import {fetchSayList} from "actions/say";
import Say from "src/components/Say/Say";

const mapStateToProps = state => {
  return {
    sayList: state.sayList.sayList,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSayList: payload => dispatch(fetchSayList(payload))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Say);