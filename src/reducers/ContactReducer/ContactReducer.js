import { types } from '../../actions/ContactAction/ContactAction';

const initialState = {
    email: '',
    userDetails: {},
}
export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case types.HANDLE_EMAIL_CHANGE:
            return {
                ...state,
                email: action.payload.email,
            };
        case types.GET_SINGLE_USER:
            return {
                ...state,
                userDetails: action.payload.userDetails
            }
        default: return state;
    }
}