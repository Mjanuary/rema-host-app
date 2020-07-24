import { COMPONENT_LOADED } from "./types";
import axios from "axios";
// import { setAlert } from "./alert";
import { API_URL, CONFIG } from "../utils/api";
import setAuthToken from "../utils/setAuthToken";

/**
 * loadComponent details()
 * log out the user
 */
export const loadComponentDetails = (component_id, callback) => async (
  dispatch
) => {
  try {
    // callback(true, false);
    setAuthToken();
    const res = await axios.get(
      `${API_URL}/component/details/${component_id}`,
      CONFIG
    );

    dispatch({
      type: COMPONENT_LOADED,
      payload: res.data,
    });

    callback(false, false);
  } catch (error) {
    callback(false, true);
    console.log({ ...error });
    // dispatch({
    //   type: LOGOUT,
    // });
  }
};
