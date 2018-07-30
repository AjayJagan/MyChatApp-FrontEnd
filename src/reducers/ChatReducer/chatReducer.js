import { types } from '../../actions/ChatAction/ChatAction';

const initialState = {
    message: '',
    conversations:{},
    messages:{}
    
};

export default function chatReducer(state = initialState, action) {
    switch (action.type) {
        case types.MESSAGE_CHANGE:
            return {
                ...state,
                message: action.payload.message
            }
        case types.SEND_MESSAGE:
            return {
                ...state,
                message: '',
            };
        case types.RECEIVE_MESSAGE:
            return {
                ...state,
                conversations: {
                    ...state.conversations,
                    [action.payload.from]: (state.conversations[action.payload.from] || []).slice().concat([action.payload._id]),
                },
                messages: {
                    ...state.messages,
                    [action.payload._id]: action.payload,
                }
            }

        default: return state;
    }
}
