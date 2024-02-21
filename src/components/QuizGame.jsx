import React from 'react';
import { Link } from 'react-router-dom';
import quizzes from '../data/quizData';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../image/quiz.jpg';

const QuizGame = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <img src={logo} alt="Quiz Image" />
        <h1>Quiz Game</h1>
      </header>

      <h2>Select a Quiz</h2>
      <ul>
        {quizzes.map(quiz => (
          <li key={quiz.id}>
            <Link to={`/quiz/${quiz.id}`}>{quiz.name}</Link>
          </li>
        ))}
      </ul>

      <button className='back-arrow' onClick={() => navigate('/')}> <FaArrowLeft /> Home Page</button>
    </div>
  );
};

export default QuizGame;
