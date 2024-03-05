// Action Types
export const FETCH_QUIZZES_REQUEST = 'FETCH_QUIZZES_REQUEST';
export const FETCH_QUIZZES_SUCCESS = 'FETCH_QUIZZES_SUCCESS';
export const FETCH_QUIZZES_FAILURE = 'FETCH_QUIZZES_FAILURE';

// Action Creators
export const fetchQuizzesRequest = () => ({
  type: FETCH_QUIZZES_REQUEST,
});

export const fetchQuizzesSuccess = (quizzes) => ({
  type: FETCH_QUIZZES_SUCCESS,
  payload: quizzes,
});

export const fetchQuizzesFailure = (error) => ({
  type: FETCH_QUIZZES_FAILURE,
  payload: error,
});

// Async Action Creator
export const fetchQuizzes = () => {
  return (dispatch) => {
    dispatch(fetchQuizzesRequest());
    // Assuming quizzes are fetched from a JSON file
    fetch('/data/quiz.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch quizzes');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchQuizzesSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchQuizzesFailure(error.message));
      });
  };
};



// Define action types
export const SUBMIT_CONTACT_FORM_REQUEST = 'SUBMIT_CONTACT_FORM_REQUEST';
export const SUBMIT_CONTACT_FORM_SUCCESS = 'SUBMIT_CONTACT_FORM_SUCCESS';
export const SUBMIT_CONTACT_FORM_FAILURE = 'SUBMIT_CONTACT_FORM_FAILURE';

// Action creators
export const submitContactFormRequest = () => ({
  type: SUBMIT_CONTACT_FORM_REQUEST,
});

export const submitContactFormSuccess = () => ({
  type: SUBMIT_CONTACT_FORM_SUCCESS,
});

export const submitContactFormFailure = (error) => ({
  type: SUBMIT_CONTACT_FORM_FAILURE,
  payload: error,
});

export const submitContactForm = ({ name, email, message }) => {
  return (dispatch) => {
    dispatch(submitContactFormRequest());
    // Simulate API call for form submission
    setTimeout(() => {
      try {
        // Simulate successful form submission
        // You can replace this with actual API call
        dispatch(submitContactFormSuccess());
      } catch (error) {
        dispatch(submitContactFormFailure(error.message));
      }
    }, 1000); // Simulated delay
  };
};
