import * as actionTypes from './ActionTypes';



export const getDataStart = () => ({
    type: actionTypes.GET_DATA_START
});

export const getDataSuccess = data => ({
    type: actionTypes.GET_DATA_SUCCESS,
    payload: data
});

export const getDataFail = err => ({
    type: actionTypes.GET_DATA_FAIL,
    payload: err
});

export const getData = () => ({
    type: actionTypes.GET_DATA
});