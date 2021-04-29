import {LOAD_RESERVATION,FAIL_RESERVATION,
    GET_DRIVER_REQUEST,GET_CUSTOMER_REQUEST, 
    GET_ACCEPTED_REQUEST} from '../constants/reservation'
import axios from 'axios'


export const requestReservation =(input)=> async(dispatch)=> {
    try {
        await axios.post('/api/reservation',input)
    } catch (error) {
        dispatch({
            type:FAIL_RESERVATION, 
            payload:error
        })
    }
}

// the driver get all request by the customer 
export const getDriverRequests=(driver_id)=> async(dispatch)=> {
    dispatch({
        type:LOAD_RESERVATION
    })
    try {
        const result = await axios.get(`/api/reservation/requests/${driver_id}`)
        dispatch({
            type:GET_DRIVER_REQUEST, 
            payload:result.data.response
        })
    } catch (error) {
        dispatch({
            type:FAIL_RESERVATION,
            payload:error
        })
    }

}
//Driver accept reservation Request of the customer 
export const driverAcceptRequest =(res_id,user_id)=> async(dispatch)=>{
    try {
        await axios.put(`/api/reservation/accept/${res_id}`)
        dispatch(getDriverRequests(user_id))
        dispatch(getCustomerRequests(user_id))
    } catch (error) {
        dispatch({
            type:FAIL_RESERVATION, 
            payload:error
        })
        
    }
}
//Driver Reject reservation Request of the customer 
export const driverRejectRequest =(res_id,user_id)=> async(dispatch)=> {
    try {
        await axios.delete(`/api/reservation/refuse/${res_id}`)
        dispatch(getDriverRequests(user_id))
        dispatch(getCustomerRequests(user_id))
    } catch (error) {
        dispatch({
            type:FAIL_RESERVATION, 
            payload:error
        })
    }
}

//Customer get all his requests 
export const getCustomerRequests =(customer_id)=> async(dispatch)=> {
    dispatch({
        type:LOAD_RESERVATION
    })
    try {
        const result = await axios.get(`/api/reservation/customer/${customer_id}`)
        dispatch({
            type:GET_CUSTOMER_REQUEST, 
            payload:result.data.response
        })
    } catch (error) {
        dispatch({
            type:FAIL_RESERVATION, 
            payload:error
        })
    }
}
//driver get all accepted reservation 
export const getAccepted =(driver_id,road_id)=> async(dispatch)=> {
    dispatch({
        type:LOAD_RESERVATION
    })
    try {
        const result = await axios.get(`/api/reservation/accepted/${driver_id}/${road_id}`)
        dispatch({
            type:GET_ACCEPTED_REQUEST, 
            payload:result.data.response
        })
    } catch (error) {
        dispatch({
            type:FAIL_RESERVATION, 
            payload:error
        })
    }
}