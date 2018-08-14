import { types } from '../../actions/ChatAction/ChatAction';


const initialState = {
    message: '',
    conversations:{},
    messages:{},
    messageInForm:'',
    
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
                },
            }
        case types.LOAD_MESSAGE:
            return{
                ...state,
                conversations:{
                    ...state.conversations,
                    [action.payload.email]:(state.conversations[action.payload.email] || []).slice().concat(action.payload.messageDetail.filter(message => (state.conversations[action.payload.email] || []).indexOf(message._id)===-1).map(message => message._id)),
                },
                messages: action.payload.messageDetail.reduce((accumulator, message) =>{
                    accumulator[message._id] = message;
                    return accumulator;
                },(state.messages)),
            };

        case types.LOAD_CURRENT_MESSAGE:
            return{
                ...state,
                messageInForm:action.payload
            }
        case types.SENT_MESSAGE:
        console.log(action.payload)
        return {
            ...state,
            conversations: {
              ...state.conversations,
              [action.payload.message.to]: (state.conversations[action.payload.message.to] || []).slice().concat([action.payload.message._id]),
            },
            messages: {
              ...state.messages,
              [action.payload.message._id]: action.payload.message,
            }
          };

        default: return state;
    }
}
