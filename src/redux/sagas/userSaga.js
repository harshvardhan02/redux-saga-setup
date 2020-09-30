import { call, put, takeEvery } from 'redux-saga/effects';
// import { GET_USERS_SUCCESS, GET_USERS_REQUEST, GET_USERS_FAILED} from '../types'
import * as types from '../types'
import * as Api from './api'

function* fetchUsers(action) {
    try {
        const user = yield call(Api.getApi);
        yield put({ type: types.GET_USERS_SUCCESS, user: user });
    } catch (e) {
        yield put({ type: types.GET_USERS_FAILED, message: e.message });
    }
}

function* userSaga() {
    yield takeEvery(types.GET_USERS_REQUEST, fetchUsers);
}

export default userSaga