import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/Headers/Header';
import { logout } from '../../actions/UserAction/UserAction';

function mapStateToProps(state) {
    return {
       
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logout,
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);