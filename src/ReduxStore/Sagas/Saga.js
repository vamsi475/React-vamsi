import { takeLatest, put } from 'redux-saga/effects';
import * as actionTypes from '../Actions/ActionTypes';
import * as actions from '../Actions/index';
import Axios from 'axios';



function* getApiData() {
    yield put(actions.getDataStart())
    try {
        const response = yield Axios.get("https://api.talentscreen.io/v1/subjects")
        yield put(actions.getDataSuccess(response.data.slice(0, 5)));
    }
    catch (err) {
        yield put(actions.getDataFail(err))
    }
}

export default function* watchGetData() {
    yield takeLatest(actionTypes.GET_DATA, getApiData)
};