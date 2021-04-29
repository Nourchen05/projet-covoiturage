import {LOAD_MESSAGE, FAIL_MESSAGE,GET_MESSAGES} from '../constants/message'

const initialState = {
    LoadMessage: false , 
    messages : [],
    errors:null , 
}

export const messageReducer =(state =initialState,{type,payload})=> {
    switch (type) {
        case LOAD_MESSAGE:
            return {...state, LoadMessage:true}
        case GET_MESSAGES: 
            return {...state, LoadMessage:false, messages:payload}
        case FAIL_MESSAGE : 
            return {...state, LoadMessage:false , errors:payload}
        default:
            return state
    }
}