import { COMPONENT_LOADED, COMPONENT_UNLOADED } from "../actions/types";

const initialState = {
  component: null,
  reports: null,
  catchment_site_district: null,
  loading: true,
  totalCatchment: 0,
  totalIndicator: 0,
  totalSamplingSite: 0,
};

// registration
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case COMPONENT_LOADED:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case COMPONENT_UNLOADED:
      return {
        ...initialState,
        loading: true,
      };
    default:
      return state;
  }
}
