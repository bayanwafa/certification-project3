import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizName: '',
  questions: [],
  newQuestion: { question: '', options: ['', '', '', ''], correctAnswer: '', points: 5 },
  editingIndex: null,
  totalPoints: 0,
  errorMessage: '',
};

const quizCreationSlice = createSlice({
  name: 'quizCreation',
  initialState,
  reducers: {
    setQuizName(state, action) {
      state.quizName = action.payload;
    },
    setQuestions(state, action) {
      state.questions = action.payload;
    },
    setNewQuestion(state, action) {
      state.newQuestion = action.payload;
    },
    setEditingIndex(state, action) {
      state.editingIndex = action.payload;
    },
    setTotalPoints(state, action) {
      state.totalPoints = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    resetQuizCreationState(state) {
      state.quizName = '';
      state.questions = [];
      state.newQuestion = { question: '', options: ['', '', '', ''], correctAnswer: '', points: 5 };
      state.editingIndex = null;
      state.totalPoints = 0;
      state.errorMessage = '';
    },
  },
});

export const {
  setQuizName,
  setQuestions,
  setNewQuestion,
  setEditingIndex,
  setTotalPoints,
  setErrorMessage,
  resetQuizCreationState,
} = quizCreationSlice.actions;

export default quizCreationSlice.reducer;
