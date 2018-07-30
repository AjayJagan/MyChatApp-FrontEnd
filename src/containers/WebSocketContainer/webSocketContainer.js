import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connectSocket} from '../../actions/WebSocketAction/WebSocketAction';
import WebSocket from '../../components/WebSocket/webSocket';

function mapStateToProp(state) {
  return {
  };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({
    connectSocket,
  }, dispatch);
}

export default connect(mapStateToProp, mapDispatchToProp)(WebSocket);