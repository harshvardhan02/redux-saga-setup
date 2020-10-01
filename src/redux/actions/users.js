import * as type from '../types';

export function getUsers(){
    return {
        type: type.GET_USERS_REQUEST
    }
}

export function postLogin(credentials){
    return {
        type: type.POST_LOGIN_REQUEST,
        payload: credentials
    }
}