import React from 'react'
import ReactDOM from 'react-dom/client'
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
import quizReducer from './reducers/quizReducer.js';
import { contactReducer } from './reducers/contactReducer.js';
import quizCreationSlice from './reducers/quizCreationSlice.js';
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)