import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../types';
import * as Api from './api';

function* postLogin(action) {
    console.log(action, '<========== Login Saga file')
    try {
        const data = yield call(Api.postApi, action.payload);
        yield put({ type: types.POST_LOGIN_SUCCESS, token: data.token });
    } catch (e) {
        yield put({ type: types.POST_LOGIN_FAILED, message: e.message });
    }
}

function* loginSaga() {
    yield takeEvery(types.POST_LOGIN_REQUEST, postLogin);
}

export default loginSaga;