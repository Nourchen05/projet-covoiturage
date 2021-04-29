import {applyMiddleware, compose,createStore} from "redux"
import thunk from 'redux-thunk'
import allReducers from '../reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)))