import {
    MODIFY_EMAIL,
    MODIFY_PASSWORD,
    MODIFY_NAME,
    MODIFY_ADDRESS
} from '../actions/types';


INITIAL_STATE ={
    email: '',
    password: '',
    address: '',
    name: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type){
        case MODIFY_EMAIL:
            return { ...state, email: action.payload }
        case MODIFY_PASSWORD:
            return { ...state, password: action.payload }
        case MODIFY_NAME:
            return { ...state, name: action.payload }
        case MODIFY_ADDRESS:
            return { ...state, address: action.payload }    
        default:
            return state
    }
}
