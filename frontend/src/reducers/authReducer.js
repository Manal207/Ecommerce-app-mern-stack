// reducers/authReducer.js
const initialState = {
    isAuthenticated: false,
    user: null,
    loading: true,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          loading: false,
        };
      case 'LOGOUT':
      case 'AUTH_ERROR':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  