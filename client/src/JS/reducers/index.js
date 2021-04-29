import { combineReducers } from 'redux'
import {userReducer} from '../reducers/userReducer'
import {roadReducer} from '../reducers/roadReducer'
import {searchReducer} from '../reducers/searchReducer'
import {messageReducer} from '../reducers/messageReducer'
import {reservationReducer} from '../reducers/reservationReducer'

const allReducers = combineReducers({
    userReducer:userReducer,
    roadReducer:roadReducer,
    searchReducer:searchReducer,
    messageReducer:messageReducer,
    reservationReducer:reservationReducer
})

export default allReducers