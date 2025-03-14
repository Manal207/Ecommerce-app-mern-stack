// actions/authActions.js
import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOGOUT,
    AUTH_ERROR,
  } from '../constants/authConstants';


// Register User
export const registerUser = (userData) => async (dispatch) => {
    try {
        const res = await axios.post('/api/auth/register', userData);
        console.log('Register Response:', res.data); // Log the response to check its structure
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
};

// Login User
export const loginUser = (userData) => async (dispatch) => {
    try {
        const res = await axios.post('/api/auth/login', userData);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
    }
};

export const logoutUser = () => (dispatch) => {
    // Remove user data from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');  // If you're storing a token

    
    // Dispatch logout action
    dispatch({ type: USER_LOGOUT });
};





