import {
  PAYMENT_PROCESS_REQUEST,
  PAYMENT_PROCESS_SUCCESS,
  PAYMENT_PROCESS_FAIL,
  PAYMENT_INTENT_REQUEST,
  PAYMENT_INTENT_SUCCESS,
  PAYMENT_INTENT_FAIL,
} from '../constants/paymentConstants';

export const paymentProcessReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_PROCESS_REQUEST:
      return { loading: true };
    case PAYMENT_PROCESS_SUCCESS:
      return { loading: false, success: true, paymentResult: action.payload };
    case PAYMENT_PROCESS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const paymentIntentReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_INTENT_REQUEST:
      return { loading: true };
    case PAYMENT_INTENT_SUCCESS:
      return { loading: false, clientSecret: action.payload };
    case PAYMENT_INTENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
