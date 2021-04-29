import {TOGGLE_SEARCH,TOGGLE_SEARCHED,SET_SEARCH} from '../constants/search'

export const toggleSearch =()=> {
    return{
        type:TOGGLE_SEARCH
    }
}
export const toggleSearched =()=> {
    return{
        type:TOGGLE_SEARCHED
    }
}
export const setInput=(input) => {
    return{
        type:SET_SEARCH,
        payload:input
    }
}
