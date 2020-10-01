import { all, fork } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';

export default function* rootSaga(){
    yield all([
        fork(userSaga),
        fork(loginSaga),
    ])
}