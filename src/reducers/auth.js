import { STORE_AUTH, LOGOUT, USER_LOADED } from "../actions/types";
import { TOKEN_NAME } from "../utils/api";

const initialState = {
  token: localStorage.getItem(TOKEN_NAME),
  isAuthenticated: false,
  loading: true,
  user: null,
};

// registration
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        errors: [],
      };
    case STORE_AUTH:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        ...payload,
      };
    case LOGOUT:
      return {
        ...initialState,
        loading: false,
      };
    default:
      return state;
  }
}
