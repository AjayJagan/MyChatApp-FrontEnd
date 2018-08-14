import axios from '../../axios';

export const types = {
    MESSAGE_CHANGE: 'MESSAGE_CHANGE',
    SEND_MESSAGE: 'SEND_MESSAGE',
    RECEIVE_MESSAGE: 'RECEIVE_MESSAGE',
    LOAD_MESSAGE: 'LOAD_MESSAGE',
    LOAD_CURRENT_MESSAGE: 'LOAD_CURRENT_MESSAGE',
    SENT_MESSAGE: 'SENT_MESSAGE',
}

export const messageChange = (message) => {
    return {
        type: types.MESSAGE_CHANGE,
        payload: {
            message,
        }
    }
};

export const sendMessage = (messageDetails) => {
    return {
        type: types.SEND_MESSAGE,
        payload: {
            messageDetails
        }
    }
};

export const receiveMessage = (message) => {
    return {
        type: types.RECEIVE_MESSAGE,
        payload: message
    }
};

export const loadMessage = (email) => {
    return (dispatch) => axios.post('/chat/loadMessage', { email }).then((response) => {
        dispatch({
            type: types.LOAD_MESSAGE,
            payload: {
                email: email,
                messageDetail: response.data,
            }
        })
    }).catch((err) => {
        console.log(err)
    })
};

export const currentMessageDisplay = (currentMessage) => {
    return {
        type: types.LOAD_CURRENT_MESSAGE,
        payload: currentMessage,
    }
}

export const sentMessage = (message) => {
    return {
        type: types.SENT_MESSAGE,
        payload: {
            message
        }
    }
}
