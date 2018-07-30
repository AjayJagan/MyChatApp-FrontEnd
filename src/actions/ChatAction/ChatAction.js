export const types ={
    MESSAGE_CHANGE:'MESSAGE_CHANGE',
    SEND_MESSAGE:'SEND_MESSAGE',
    RECEIVE_MESSAGE:'RECEIVE_MESSAGE',
}

export const messageChange = (message) =>{
   return {
       type:types.MESSAGE_CHANGE,
       payload:{
           message,
       }
   }
};

export const sendMessage = (messageDetails) =>{
    return{
        type:types.SEND_MESSAGE,
        payload:{
            messageDetails
        }
    }
};

export const receiveMessage = (message) =>{
    return{
        type:types.RECEIVE_MESSAGE,
        payload:message
    }
}