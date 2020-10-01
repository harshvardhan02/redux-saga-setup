import * as type from '../types'

const initialState = {
    users: [],
    name: 'harshvardhan',
    loading: false,
    error: null,
    token: null,
}

export default function (state=initialState, action){
    console.log(action, '<=================== reducer')
    switch(action.type){
        case type.GET_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.user
            }
        case type.GET_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        case type.POST_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case type.POST_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.token
            }
        case type.POST_LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        default:
             return state;
    }
}