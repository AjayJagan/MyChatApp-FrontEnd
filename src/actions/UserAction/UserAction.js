import axios from '../../axios';

export const types = {
    LOGIN_GOOGLE_USER : 'LOGIN_GOOGLE_USER',
    LOGOUT_USER:' LOGOUT_USER',
};

export const loginGoogleUser = (token, firstTime = true) => {
    return (dispatch) => axios.post('user/login', { token }).then((response) => {
        if (response.data) {
            if (firstTime) {
                const user = response.data;
                localStorage.setItem('userObject', JSON.stringify(user));
            }
            dispatch({
                type: types.LOGIN_GOOGLE_USER,
                payload: {
                    user: response.data,
                }
            })
        }
    }).catch((err) => {
        console.log(err);
    })

};

export const logout = () =>{
    localStorage.removeItem('userObject');
    return {
        type:types.LOGOUT_USER,
    }
}


