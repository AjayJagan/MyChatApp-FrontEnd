import { combineReducers } from 'redux';
import userReducer from '../src/reducers/UserReducer/UserReducer';
import contactReducer from './reducers/ContactReducer/ContactReducer';
import contactListReducer from './reducers/ContactReducer/ContactListReducer';
import chatReducer from './reducers/ChatReducer/chatReducer';

export default combineReducers({
    user:userReducer,
    contact:contactReducer,
    contactList:contactListReducer,
    chat:chatReducer,
});