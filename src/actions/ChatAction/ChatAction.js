export const types ={
    MESSAGE_CHANGE:'MESSAGE_CHANGE',
    SEND_MESSAGE:'SEND_MESSAGE',
}

export const messageChange = (message) =>{
    console.log(message)
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
}