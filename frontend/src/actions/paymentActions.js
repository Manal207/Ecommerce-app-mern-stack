import axios from 'axios';
import {
  PAYMENT_PROCESS_REQUEST,
  PAYMENT_PROCESS_SUCCESS,
  PAYMENT_PROCESS_FAIL,
  PAYMENT_INTENT_REQUEST,
  PAYMENT_INTENT_SUCCESS,
  PAYMENT_INTENT_FAIL,
} from '../constants/paymentConstants';

export const createPaymentIntent = (totalPrice) => async (dispatch, getState) => {
  try {
    dispatch({ type: PAYMENT_INTENT_REQUEST });

    const {
      auth: { user },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': user.token,
      },
    };

    const { data } = await axios.post('/api/payments/create-payment-intent', { totalPrice }, config);

    dispatch({ type: PAYMENT_INTENT_SUCCESS, payload: data.clientSecret });
  } catch (error) {
    dispatch({
      type: PAYMENT_INTENT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const processPayment = (paymentData) => async (dispatch, getState) => {
  try {
    dispatch({ type: PAYMENT_PROCESS_REQUEST });

    const {
      auth: { user },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': user.token,
      },
    };

    const { data } = await axios.post('/api/payments', paymentData, config);

    dispatch({ type: PAYMENT_PROCESS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PAYMENT_PROCESS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
