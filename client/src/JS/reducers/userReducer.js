import {
    LOAD_USER, FAIL_USER,
    REGISTER_USER, LOGIN_USER, LOGOUT_USER,
    GET_CURRENT,GET_USER_ID
} from '../constants/user'

//INITIALSTATE 
const initialState = {
    user: null,
    loadUser: false,
    errors: null,
    isAuth: false,
    users: [],
    user_id: {},

}
//USER REDUCER 
export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, loadUser: true }
        //REGISTER A USER     
        case REGISTER_USER:
            localStorage.setItem("token", payload.token)
            return { ...state, loadUser: false, user: payload.user, isAuth: true }
        //USER LOGIN    
        case LOGIN_USER:
            localStorage.setItem("token", payload.token)
            return { ...state, loadUser: false, user: payload.user, isAuth: true }
        //USER ROLE : ADMIN
        case GET_CURRENT:
            return { ...state, loadUser: false, isAuth: true, user: payload }
        //GET USER BY ID 
        case GET_USER_ID: 
            return {...state, loadUser:false , user_id:payload}
        //USER LOGOUT    
        case LOGOUT_USER:
            localStorage.removeItem("token")
            localStorage.removeItem("role")
            return { ...state, isAuth: false, user: null, loadUser: false, errors: null }
        case FAIL_USER:
            return { ...state, loadUser: false, errors: payload }
        default:
            return state;
    }
}