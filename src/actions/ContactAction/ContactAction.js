import axios from '../../axios';
export const types = {
    HANDLE_EMAIL_CHANGE: 'HANDLE_EMAIL_CHANGE',
    ADD_CONTACT:'ADD_CONTACT',
    GET_SINGLE_USER:'GET_SINGLE_USER',
};

export const handleEmailChange = (email) => {
    return {
        type: types.HANDLE_EMAIL_CHANGE,
        payload:{
            email,
        }
    }
};

export const addContact =(email) =>{
   return (dispatch) => axios.post('contact/add',{email}).then((response)=>{
        dispatch({
            type:types.ADD_CONTACT,
        })
   }).catch((err)=>{
       console.log(err);
   })
};

export const getUserDetails = (email) =>{
    return (dispatch) => axios.post('contact/getOneUser',{email}).then((response)=>{
        dispatch({
            type:types.GET_SINGLE_USER,
            payload:{
                userDetails:response.data
            }
        })
    }).catch((err)=>{
        console.log(err)
    })
};



