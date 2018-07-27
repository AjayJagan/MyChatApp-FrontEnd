import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import contactList from '../../components/contacts/contactList';
import {getAllContacts} from '../../actions/ContactAction/ContactListAction';

function mapStateToProps(state) {
    return {
        contactList:state.contactList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllContacts,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(contactList);
