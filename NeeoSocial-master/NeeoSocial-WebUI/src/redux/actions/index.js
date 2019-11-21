import axios from 'axios';
import * as constants from "./../constants/action-types";
import { authHeader } from './../../helpers/auth-header';

export function getData() {
    return function (dispatch) {
        return axios.get(constants.BASE_URL + 'https://jsonplaceholder.typicode.com/posts')
            .then(response => response.data)
            .then(data => {
                console.log("there");
                dispatch({
                    type: DATA_LOADED,
                    payload: data
                });
            });
    };
}

export function register(params) {
    debugger;
    return function (dispatch) {
        return axios.post(constants.BASE_URL + '/users', params)
            .then(response => response.data)
            .then(data => {              
                dispatch({
                    type: constants.REGISTER,
                    payload: data
                });
            });
    };
}

export function login(params) {
    return async function (dispatch) {
        try {
            const response = await axios.post(constants.BASE_URL + '/Users/SignIn', params);
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch({
                type: constants.SIGN_IN,
                payload: true
            });
        } catch (error) {
            console.log("error", error);
        }
    };
}

export function userBasicInformation() {
    return async function (dispatch) {
        try {           
            let user = JSON.parse(localStorage.getItem('user'));
            const response = await axios.get(constants.BASE_URL + '/users/' + user.userId, { headers: authHeader() });
          
            dispatch({
                type: constants.USER_BASIC_INFORMATION,
                payload: response.data
            });
        } catch (error) {
            console.log("error", error);
        }
    };
}
