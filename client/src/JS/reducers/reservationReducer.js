import {FAIL_RESERVATION,LOAD_RESERVATION,GET_DRIVER_REQUEST,
    GET_CUSTOMER_REQUEST,GET_ACCEPTED_REQUEST} from '../constants/reservation'

const initialState= {
    loadRes : false , 
    driverRequests :[], 
    customerRequests:[],
    acceptedRequests:[],
    errors:null
}

export const reservationReducer=(state=initialState,{type,payload})=> {
    switch (type) {
        case LOAD_RESERVATION:
            return {...state,loadRes:true}
        case GET_DRIVER_REQUEST : 
            return {...state,loadRes:false,driverRequests:payload}
        case GET_CUSTOMER_REQUEST:
            return {...state,loadRes:false,customerRequests:payload}
        case GET_ACCEPTED_REQUEST :
            return {...state,loadRes:false, acceptedRequests:payload}
        case FAIL_RESERVATION :
            return {...state,loadRes:false,errors:null}
        default:
            return state 
    }
}