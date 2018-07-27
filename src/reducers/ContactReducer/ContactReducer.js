import {types} from '../../actions/ContactAction/ContactAction';

const initialState ={
    email:'',
}
export default function contactReducer(state = initialState,action){
    switch(action.type){
        case types.HANDLE_EMAIL_CHANGE:
            return{
                ...state,
                email:action.payload.email,
            };
        default: return state;
    }
}