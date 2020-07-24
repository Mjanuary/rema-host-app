import {
  VISUALISATION_LOADED,
  VISUALISATION_DATA_LOADED,
} from "../actions/types";

const initialState = {
  loading: true,
  catchment_site_district: [],
  component_details: [],
  indicators: [],
  data: null,
};

// registration
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case VISUALISATION_LOADED:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case VISUALISATION_DATA_LOADED:
      return {
        ...state,
        data: {
          ...payload,
        },
        loading: true,
      };
    default:
      return state;
  }
}
