//IMPORT CONSTANT
import {
    LOAD_USER, FAIL_USER,
    REGISTER_USER, LOGIN_USER, LOGOUT_USER,
    GET_CURRENT,GET_USER_ID
} from '../constants/user'
//IMPORT AXIOS
import axios from "axios"


// REGISTER USER 
export const registerUser = (user, history) => async (dispatch) => {
    dispatch({
        type: LOAD_USER
    })
    try {
        const result = await axios.post("/api/user/register", user)
        dispatch({
            type: REGISTER_USER,
            payload: result.data
        })
        localStorage.setItem("user", result.data.user._id)
        history.push("/")
    } catch (error) {
        dispatch({
            type: FAIL_USER,
            payload: error.response.data
        })
    }
}
//USER LOGIN
export const loginUser = (user, history) => async (dispatch) => {
    dispatch({
        type: LOAD_USER
    })
    try {
        const result = await axios.post("/api/user/login", user)
        dispatch({
            type: LOGIN_USER,
            payload: result.data
        })
        localStorage.setItem("user", result.data.user._id)
        history.push("/")
        
    } catch (error) {
        dispatch({
            type: FAIL_USER,
            payload: error.response.data
        })
    }
}
//LOGOUT 
export const logout = () => async (dispatch) => {
    dispatch({
        type: LOGOUT_USER
    })
}
//GET CURRENT
export const getCurrent = () => async (dispatch) => {
    dispatch({
        type: LOAD_USER
    })
    const options = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }
    try {
        const result = await axios.get("/api/user/current", options)
        //user 
        dispatch({
            type: GET_CURRENT,
            payload: result.data.user
        })

    } catch (error) {
        dispatch({
            type: FAIL_USER,
            payload: error
        })
    }
}

// GET USER BY ID 
export const getUserId = (user_id)=> async(dispatch)=> {
    dispatch({
        type:LOAD_USER
    })
    try {
        const result = await axios.get(`/api/user/${user_id}`)
        dispatch({
            type:GET_USER_ID, 
            payload : result.data.response
        })
        
    } catch (error) {
        dispatch({
            type:FAIL_USER, 
            payload:error
        })
    }
}
// UPDATE USER 
export const updateUser = (user_id,input)=> async(dispatch)=> {
    try {
        await axios.put(`/api/user/${user_id}`,input)
        dispatch(getCurrent())
    } catch (error) {
        dispatch({
            type:FAIL_USER,
            payload:error
        })
    }
}
//change password
export const changePassword = (user_id, password) => async (dispatch) => {
    try {
        const result = await axios.put(`/api/user/password/${user_id}`, password)
        dispatch(getCurrent())
    } catch (error) {
        dispatch({
            type: FAIL_USER,
            payload: error.response.data
        })
    }
}

