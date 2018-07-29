import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import chatHeader from '../../components/Headers/chatHeader';
import { withRouter } from 'react-router-dom';
import {getUserDetails} from '../../actions/ContactAction/ContactAction';
function mapStateToProps(state) {
    return {
        userDetails:state.contact.userDetails,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUserDetails,
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(chatHeader));