import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './reducers/quizReducer';
import { contactReducer } from './reducers/contactReducer';

const store = configureStore({
  reducer: {
    quiz: quizReducer,
    contact: contactReducer,
  },
});


export default store;
