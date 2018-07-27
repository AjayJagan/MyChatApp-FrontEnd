import axios from '../../axios';

export const types ={
    GET_CONTACT_LIST:'GET_CONTACT_LIST',
}

export const getAllContacts = () =>{
    return (dispatch) => axios.get('contact/getAllContacts').then((response)=>{
            dispatch({
                type:types.GET_CONTACT_LIST,
                payload:{
                    contactList:response.data
                }
            })
    }).catch((error) =>{
        console.log(error);
    })
};