import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Contacts from '../../components/contacts/contacts';
import { handleEmailChange,addContact } from '../../actions/ContactAction/ContactAction';
function mapStateToProps(state) {
    return {
        contact:state.contact,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        handleEmailChange,
        addContact,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);