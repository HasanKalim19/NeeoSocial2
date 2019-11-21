import * as constants from "./../constants/action-types";

const initialState = {  
    isLogin: [],
    register: [],
    user_basic_information: [],
    remoteArticles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === constants.DATA_LOADED) {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }

    if (action.type === constants.REGISTER) {
        return Object.assign({}, state, {
            register: action.payload
        });
    }
    if (action.type === constants.SIGN_IN) {
        return Object.assign({}, state, {
            isLogin: action.payload
        });
    }

    if (action.type === constants.USER_BASIC_INFORMATION) {
        return Object.assign({}, state, {
            user_basic_information: action.payload
        });
    }

    return state;
}
export default rootReducer;