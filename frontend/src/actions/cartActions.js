// actions/cartActions.js
import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART, GET_CART, CART_ERROR, CART_REQUEST } from '../constants/cartConstants';

export const addToCart = (productId, quantity) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_REQUEST });

    const {
      auth: { user },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': user.token,  // Assuming user object has the token
      },
    };

    const res = await axios.post('/api/cart/add', { productId, quantity }, config);
    dispatch({ type: ADD_TO_CART, payload: res.data });
  } catch (err) {
    dispatch({ type: CART_ERROR, payload: err.response.data.msg });
  }
};

export const removeFromCart = (productId) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_REQUEST });

    const {
      auth: { user },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': user.token,
      },
    };

    const res = await axios.delete(`/api/cart/remove/${productId}`, config);
    dispatch({ type: REMOVE_FROM_CART, payload: res.data });
  } catch (err) {
    dispatch({ type: CART_ERROR, payload: err.response.data.msg });
  }
};

export const getCart = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_REQUEST });

    const {
      auth: { user },
    } = getState();

    const config = {
      headers: {
        'x-auth-token': user.token,
      },
    };

    const res = await axios.get('/api/cart', config);
    dispatch({ type: GET_CART, payload: res.data });
  } catch (err) {
    dispatch({ type: CART_ERROR, payload: err.response.data.msg });
  }
};
