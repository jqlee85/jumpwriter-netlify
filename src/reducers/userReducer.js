import Cookies from "js-cookie";

let loggedIn = Cookies.get('auth_token') ? true : false;
let authStatus = Cookies.get('auth_token') ? 'logged_in' : 'logged_out';

const userState = {
  auth_status: authStatus,
  logged_in: loggedIn
}

// Reducer
const userReducer = (state = userState, action) => {
  switch (action.type) {
    case 'USER_LOG_IN_ATTEMPT':
      return { 
        ...state,
        auth_status: 'attempting'
      };
    case 'USER_LOG_IN_SUCCESS':
      return { 
        ...state,
        auth_status: 'logged_in',
        logged_in: true,
        data: action.payload
      };
    case 'USER_LOG_IN_ERROR':
      return { 
        ...state,
        auth_status: 'failed',
        data: action.payload
      };
    case 'USER_LOG_OUT':
      Cookies.remove('auth_token');
      return { 
        ...state,
        auth_status: 'logged_out',
        logged_in: false
      };
    default:
      return state;
  }
}

export default userReducer;