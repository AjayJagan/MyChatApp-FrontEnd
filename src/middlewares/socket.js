import { types } from '../actions/WebSocketAction/WebSocketAction';
import { types as chatActionTypes,receiveMessage, sentMessage } from '../actions/ChatAction/ChatAction';

var socket = {};

const socketMiddleware = store => next => action => {
    switch (action.type) {

        case types.CONNECT_SOCKET:
            const state = store.getState();
            const token = state.user.user.token;
            
            socket = io(`http://localhost:3000?token=${token}`);

            socket.on('onReceiveMessage',(data)=>{
                store.dispatch(receiveMessage(data));
            });
            
            socket.on('onSentMessage',(data)=>{
                store.dispatch(sentMessage(data));
            })
            break;

        case chatActionTypes.SEND_MESSAGE: 
            socket.emit(action.payload.messageDetails.type, action.payload.messageDetails);
            break;

        default:
            break;
    }
    next(action);
};

export default socketMiddleware;