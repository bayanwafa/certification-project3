// Save quiz to localStorage
const saveQuiz = (quiz) => {
  localStorage.setItem("quiz", JSON.stringify(quiz));
};

// Load quiz from localStorage
const loadQuiz = () => {
  const quizJSON = localStorage.getItem("quiz");
  return quizJSON ? JSON.parse(quizJSON) : null;
};

// Remove quiz from localStorage
const removeQuiz = () => {
  localStorage.removeItem("quiz");
};

export default { saveQuiz, loadQuiz, removeQuiz };
