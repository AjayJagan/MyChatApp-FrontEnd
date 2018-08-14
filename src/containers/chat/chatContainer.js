import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import chatPage from '../../components/chat/chatPage';
import {messageChange, sendMessage, loadMessage, currentMessageDisplay} from '../../actions/ChatAction/ChatAction';
 
function mapStateToProps(state, props) {
    return {
        contact:state.contact.userDetails,
        chat:state.chat,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        messageChange,
        sendMessage,
        loadMessage,
        currentMessageDisplay,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(chatPage);