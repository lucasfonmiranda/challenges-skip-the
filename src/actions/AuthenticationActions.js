import axios from 'axios';

import {
    MODIFY_EMAIL,
    MODIFY_PASSWORD,
    MODIFY_ADDRESS,
    MODIFY_NAME
} from './types';


//Action to modify email
export const modifyEmail = (text) => {
    return{
        type: MODIFY_EMAIL,
        payload: text
    }
}


//Action to modify password
export const modifyPassword = (text) => {
    return{
        type: MODIFY_PASSWORD,
        payload: text
    }
}

//Action to modify address
export const modifyAdress = (text) => {
    return{
        type: MODIFY_ADDRESS,
        payload: text
    }
}

//Action to modify Name
export const modifyName = (text) => {
    return{
        type: MODIFY_NAME,
        payload: text
    }
}

//New user 
export const newUserDb = ({ email, password, name, address}) => {
    return dispatch => {
        axios.post('')
    }
}


//Test connection with api 

export const authenticationUser = ({ email, password }) => {
    // let config = {
    //     headers: {'Authorization': "bearer" + token}
    // };
    
    return dispatch => {
        axios.post(`http://api-vanhack-event-sp.azurewebsites.net/api/v1/Customer/auth?email=${email}password=${password}`
        )
        .then((response) => {
            console.log(response.status)
        })
        .catch((error) => {
            console.log(error);
        })
    }
}