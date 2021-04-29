import {LOAD_MESSAGE,FAIL_MESSAGE,GET_MESSAGES} from '../constants/message'
import axios from 'axios'
import { get } from 'mongoose'


//post a new message
export const addMessage =(user_s,user_r,input)=>async(dispatch) => {
    try {
        await axios.post(`/api/message/s/${user_s}/r/${user_r}`,input)
        
    } catch (error) {
        dispatch({
            type:FAIL_MESSAGE ,
            payload: error
        })
    }
}

//get messages from specific sender and receiver 
export const getMessages =(user_s,user_r)=> async(dispatch)=> {
    dispatch({
        type:LOAD_MESSAGE
    })
    try {
        const result = await axios.get(`/api/message/s/${user_s}/r/${user_r}`)
        dispatch({
            type:GET_MESSAGES, 
            payload:result.data.response
        })
    } catch (error) {
        dispatch({
            type:FAIL_MESSAGE,
            payload:error
        })
    }
}