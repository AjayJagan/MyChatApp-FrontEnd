import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../../layout/Login/Login';
import { loginGoogleUser } from '../../actions/UserAction/UserAction'

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginGoogleUser:loginGoogleUser,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);