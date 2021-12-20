import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
import { useNavigate } from 'react-router-dom';
import AuthService from "../Services/AuthService";

 const login = (username, password) => (dispatch) => {
  
  if (username !== "" && password !== "") {
    AuthService.login(username, password);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: { username: username, password: password } },
    });
  
  } else {
    dispatch({
      type: LOGIN_FAIL,
    });
    
  }
};
export default login