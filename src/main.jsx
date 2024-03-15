import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'

/**
 * Necessary for adding redux toolkit
 */
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

/**
 * Importing reducers
 */
import testReducer from './reducers/testReducer.js'
import quizReducer from './reducers/quizReducer';
import { contactReducer } from './reducers/contactReducer';
import quizCreationSlice from './reducers/quizCreationSlice';
/**
 * Creating the store w/reducers
 */
const store = configureStore({
  reducer: {
    test: testReducer,
    quiz: quizReducer,
    contact: contactReducer,
    quizCreation: quizCreationSlice,
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
