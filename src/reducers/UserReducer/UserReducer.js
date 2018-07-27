import { types } from '../../actions/UserAction/UserAction'


const initialState = {
    isAuthenticated: false,
    user:{
        name:'',
        email:'',
        picture:'',
        token:'',
    }
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_GOOGLE_USER:
            return {
                ...state,
                isAuthenticated: true,
                user:action.payload.user,
            };
        case types.LOGOUT_USER:
            return initialState
            
        default:
            return state;
    }
}