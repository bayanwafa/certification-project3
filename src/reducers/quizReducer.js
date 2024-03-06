import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizzes: [],
  currentQuestionIndex: 0,
  userResponses: {},
  score: 0,
  submitted: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuizzes(state, action) {
      state.quizzes = action.payload;
    },
    setCurrentQuestionIndex(state, action) {
      state.currentQuestionIndex = action.payload;
    },
    setUserResponse(state, action) {
      const { questionIndex, selectedOption } = action.payload;
      state.userResponses[questionIndex] = selectedOption;
    },
    setScore(state, action) {
      state.score = action.payload;
    },
    setSubmitted(state, action) {
      state.submitted = action.payload;
    },
    resetQuizState(state) {
      state.currentQuestionIndex = 0;
      state.userResponses = {};
      state.score = 0;
      state.submitted = false;
    },
  },
});

export const {setQuizzes, setCurrentQuestionIndex, setUserResponse, setScore, setSubmitted, resetQuizState,} = quizSlice.actions;

export default quizSlice.reducer;
