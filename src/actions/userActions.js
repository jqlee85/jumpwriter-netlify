import Cookies from "js-cookie";

export function userLoginAttempt(){
  return { 
    type: 'USER_LOG_IN_ATTEMPT'
  }
}

export function userLoginResponse(response){
  if ( response.data.status == '200' && response.data.token ) {
    userAuth => dispatch(userLoginSuccess(response))
  } else {
    err => dispatch(userLoginError(response))
  }
}

export function userLoginSuccess(loginInfo){
  Cookies.set('auth_token', loginInfo.token, { expires: 30 });
  return { 
    type: 'USER_LOG_IN_SUCCESS', 
    payload: loginInfo,
  }
}

export function userLoginError(loginInfo){
  return { 
    type: 'USER_LOG_IN_ERROR', 
    payload: loginInfo 
  }
}

export function userLogout(){
  return { 
    type: 'USER_LOG_OUT'
  }
}

export const requestUserLogin = (userName, password) => (dispatch, getState) => {
  dispatch(userLoginAttempt());
  return fetch("https://api.jumpwriter.com/wp-json/jwt-auth/v1/token/?username="+userName+"&password="+password,
  {method:'post'})
    .then(response => response.json())
    .then(userRes => {
      console.log(userRes);
      if ( userRes.token ) {
        return dispatch(userLoginSuccess(userRes))
      } else {
        return dispatch(userLoginError(userRes))
      }
    })
    .catch(err => dispatch(userLoginError(err)));
};
