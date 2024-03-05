import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizzes: [],
  userResponses: {},
  score: 0,
  submitted: false,
  currentQuestionIndex: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCurrentQuestionIndex(state, action) {
      state.currentQuestionIndex = action.payload;
    },
    answerQuestion(state, action) {
      const { questionIndex, selectedOption } = action.payload;
      state.userResponses[questionIndex] = selectedOption;
    },
    submitQuiz(state) {
      let newScore = 0;
      state.quizzes.forEach((quiz, index) => {
        const userResponse = state.userResponses[index];
        const question = quiz.questions[index];
        if (userResponse === question.correct_answer) {
          newScore += question.points;
        }
      });
      state.score = newScore;
      state.submitted = true;
    },
    resetQuiz(state) {
      state.userResponses = {};
      state.score = 0;
      state.submitted = false;
    },
  },
});

export const { setQuizzes, answerQuestion, submitQuiz, resetQuiz } = quizSlice.actions;

export const selectQuiz = state => state.quiz.quizzes;

export const { setCurrentQuestionIndex } = quizSlice.actions;

export default quizSlice.reducer;
