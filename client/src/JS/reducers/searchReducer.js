import {TOGGLE_SEARCH,TOGGLE_SEARCHED,SET_SEARCH} from '../constants/search'

const initialState={
    search: false, 
    input :[]
}

export const searchReducer =(state=initialState,{type,payload})=> {
    switch(type){
        case TOGGLE_SEARCH : 
            return {...state,search:false}
        case TOGGLE_SEARCHED: 
            return {...state ,search:true}
        case  SET_SEARCH :
            return {...state, input:payload}
        default : return state

    }
}