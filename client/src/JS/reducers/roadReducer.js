import {
    LOAD_ROAD, FAIL_ROAD,
    GET_ROAD_ID, GET_RAOD_SEARCH, GET_ROADS
} from '../constants/road'


const initialState = {
    loadRoad: false,
    errors: null,
    roads: [],
    road_id: {},
}

export const roadReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_ROAD : 
            return {...state,loadRoad:true}
        case GET_RAOD_SEARCH:
            return {...state, loadRoad:false ,roads:payload}
        case GET_ROADS : 
            return {...state, loadRoad:false , roads:payload}
        case FAIL_ROAD : 
            return {...state , loadRoad:false , errors:payload}
        case GET_ROAD_ID : 
            return {...state , loadRoad:false , road_id:payload}
        default:
            return state;
    }
}