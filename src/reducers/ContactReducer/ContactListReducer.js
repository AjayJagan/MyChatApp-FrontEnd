import {types} from '../../actions/ContactAction/ContactListAction';

const initialState ={
    contacts:[],
}

export default function contactListReducer(state=initialState, action){
    switch(action.type){
        case types.GET_CONTACT_LIST:
            return{
                ...state,
                contacts:action.payload.contactList
            }
        default:return state;
    }

}