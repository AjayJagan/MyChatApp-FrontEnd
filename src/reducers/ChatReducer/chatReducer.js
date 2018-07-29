import {types} from '../../actions/ChatAction/ChatAction';

const initialState ={
    message:''
};

export default function chatReducer(state=initialState, action){
    switch(action.type){
        case types.MESSAGE_CHANGE:
            return{
                ...state,
                message:action.payload.message
            }
            case types.SEND_MESSAGE:
            return {
              ...state,
              message: '',
            };
      
        default: return state;
    }
}
