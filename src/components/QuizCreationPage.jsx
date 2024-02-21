import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const QuizCreationPage = () => {
  const navigate = useNavigate();
  const [quizName, setQuizName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [points, setPoints] = useState(1); // Default points for a new question

  const handleAddQuestion = () => {
    if (newQuestion.trim() !== '') {
      setQuestions(prevQuestions => [
        ...prevQuestions,
        {
          question: newQuestion,
          points
        }
      ]);
      setNewQuestion('');
    }
  };

  const handleSaveQuiz = () => {
    // Here you can save the quiz with its name and questions to your data store
    const newQuiz = {
      name: quizName,
      questions
    };
    console.log('New Quiz:', newQuiz);
    // Reset form fields after saving
    setQuizName('');
    setQuestions([]);
    setNewQuestion('');
    setPoints(1);
  };

  return (
    <div>
      <header>
        <h1>Create a Quiz</h1>
      </header>
      <form>
        <label>
          Quiz Name:
          <input
            type="text"
            value={quizName}
            onChange={(e) => setQuizName(e.target.value)}
          />
        </label>
        <br />
        <label>
          New Question:
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
        </label>
        <label>
          Points:
          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(parseInt(e.target.value))}
          />
        </label>
        <button onClick={handleAddQuestion}>Add Question</button>
        <ul>
          {questions.map((q, index) => (
            <li key={index}>
              {q.question} - Points: {q.points}
            </li>
          ))}
        </ul>
        <button onClick={handleSaveQuiz}>Save Quiz</button>
      </form>

      <button className='back-arrow' onClick={() => navigate('/')}> <FaArrowLeft /> Home Page </button>
    </div>
  );
};

export default QuizCreationPage;
