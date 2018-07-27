import axios from '../../axios';
export const types = {
    HANDLE_EMAIL_CHANGE: 'HANDLE_EMAIL_CHANGE',
    ADD_CONTACT:'ADD_CONTACT',
};

export const handleEmailChange = (email) => {
    return {
        type: types.HANDLE_EMAIL_CHANGE,
        payload:{
            email,
        }
    }
}

export const addContact =(email) =>{
   return (dispatch) => axios.post('contact/add',{email}).then((response)=>{
        console.log(response)
        dispatch({
            type:types.ADD_CONTACT,
        })
   }).catch((err)=>{
       console.log(err);
   })
}

