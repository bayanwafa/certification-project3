import {
    SUBMIT_CONTACT_FORM_REQUEST,
    SUBMIT_CONTACT_FORM_SUCCESS,
    SUBMIT_CONTACT_FORM_FAILURE,
  } from './actions';
  
  // Initial state
  const initialState = {
    submitted: false,
    error: null,
  };
  
  // Reducer function
  export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case SUBMIT_CONTACT_FORM_REQUEST:
        return {
          ...state,
          submitted: false,
          error: null,
        };
      case SUBMIT_CONTACT_FORM_SUCCESS:
        return {
          ...state,
          submitted: true,
          error: null,
        };
      case SUBMIT_CONTACT_FORM_FAILURE:
        return {
          ...state,
          submitted: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  