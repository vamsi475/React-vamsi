import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    loading: false,
    data: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.GET_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
};

export default reducer;