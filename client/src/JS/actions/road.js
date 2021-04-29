import {LOAD_ROAD, FAIL_ROAD, 
    GET_ROAD_ID,GET_RAOD_SEARCH, GET_ROADS} from '../constants/road'
import axios from 'axios'



// add a new raod
export const addRoad =(user_id,road)=> async(dispatch) => {
    try {
        await axios.post(`/api/road/${user_id}`,road)
    } catch (error) {
        dispatch({
            type:FAIL_ROAD,
            payload:error
        })
    }
}
//seaching road by departure and destination
export const searchRoad =(user_id) => async(dispatch)=> {
    dispatch({
        type:LOAD_ROAD
    })
    try {
        const result = await axios.get(`/api/road/${user_id}/search${window.location.search}`)
        dispatch({
            type:GET_RAOD_SEARCH, 
            payload: result.data.response
        })
    } catch (error) {
        dispatch({
            type:FAIL_ROAD, 
            payload:error
        })
    }
}

//get a road by id
export const getroad =(road_id) => async(dispatch)=> {
    dispatch({
        type:LOAD_ROAD
    })
    try {
        const result = await axios.get(`/api/road/${road_id}`)
        dispatch({
            type:GET_ROAD_ID, 
            payload:result.data.response
        })
    } catch (error) {
        dispatch({
            type:FAIL_ROAD, 
            payload:error
        })
    }
}
//get roads by specific id
export const getRoads =(user_id) => async(dispatch)=> {
    dispatch({
        type:LOAD_ROAD
    })
    try {
        const result= await axios.get(`/api/road/user/${user_id}`)
        dispatch({
            type:GET_ROADS, 
            payload:result.data.response
        })
    } catch (error) {
        dispatch({
            type:FAIL_ROAD, 
            payload:error
        })
    }
}