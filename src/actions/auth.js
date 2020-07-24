import { STORE_AUTH, LOGOUT, USER_LOADED } from "./types";
import axios from "axios";
// import { API_URL, CONFIG } from "../utils/api";
// import { setAlert } from "./alert";
import { API_URL, CONFIG } from "../utils/api";

import setAuthToken from "../utils/setAuthToken";
import { TOKEN_NAME } from "../utils/api";

/**
 * Login the user
 * @param {*} data
 * @param {*} history
 */
export const LoginSuccess = (data, history) => (dispatch) => {
  dispatch({
    type: STORE_AUTH,
    payload: data,
  });

  // Redirect user
  history.push("./components");
};

/**
 * LogoutTheUser()
 * log out the user
 */
export const LogoutTheUser = (history) => (dispatch) => {
  localStorage.removeItem(TOKEN_NAME);
  dispatch({
    type: LOGOUT,
  });
};

/**
 * LogoutTheUser()
 * log out the user
 */
export const LoadUserDetails = (callback) => async (dispatch) => {
  try {
    callback(true);
    setAuthToken();
    console.log("loading user...");

    const res = await axios.get(`${API_URL}/user/view_user`, CONFIG);
    console.log("user loaded: ", res);

    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });

    callback(false);
  } catch (error) {
    callback(false);
    console.log({ ...error });
    localStorage.removeItem(TOKEN_NAME);
    dispatch({
      type: LOGOUT,
    });
  }
};
